import { NextResponse } from "next/server";
import connectClient from "@/db/client";
import * as bcrypt from "bcrypt";
import { render } from "@react-email/components";
import ResetPasswordSuccessfulEmail from "@/emails/reset-password-successful-email";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { token, newPassword, confirmPassword } = await request.json();

    if (!token || !newPassword || !confirmPassword) {
      return NextResponse.json(
        { success: false, message: "Bad request" },
        { status: 400 },
      );
    }

    const client = await connectClient();
    const database = client.db(process.env.MONGODB_DATABSE);
    const collection = database.collection(
      process.env.MONGODB_COLLECTION_USERS,
    );

    const user = await collection.findOne({ forgotPasswordToken: token });
    if (!user) {
      return NextResponse.json(
        { success: false, message: "Token not valid" },
        { status: 404 },
      );
    }

    if (user.forgotPasswordTokenExpiry < Date.now()) {
      return NextResponse.json(
        { success: false, message: "Token has expired" },
        { status: 404 },
      );
    }

    await collection.updateOne(
      { forgotPasswordToken: token },
      {
        $set: {
          password: await bcrypt.hash(newPassword, 10),
        },
        $unset: {
          forgotPasswordToken: "",
          forgotPasswordTokenExpiry: "",
        },
      },
    );

    const resetPasswordSuccessfulEmailHtml = render(
      <ResetPasswordSuccessfulEmail fullName={user.name} />,
    );

    const transport = nodemailer.createTransport({
      service: "gmail",
      /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
      */
      auth: {
        user: process.env.PROJECT_EMAIL_USER,
        pass: process.env.PROJECT_EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.PROJECT_EMAIL_USER,
      to: user.email,
      subject: "Password Reset Successful",
      html: resetPasswordSuccessfulEmailHtml,
    };

    await transport.sendMail(mailOptions);

    return NextResponse.json(
      {
        success: true,
        message: "New password created for existing user and email sent",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: error },
      { status: 500 },
    );
  }
}
