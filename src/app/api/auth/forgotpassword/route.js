import { NextResponse } from "next/server";
import connectClient from "@/db/client";
import crypto from "crypto";
import * as bcrypt from "bcrypt";
import { render } from "@react-email/components";
import ResetPasswordEmail from "@/emails/reset-password-email";
import nodemailer from "nodemailer";
export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Bad request" },
        { status: 400 },
      );
    }

    const client = await connectClient();
    const database = client.db(process.env.MONGODB_DATABASE);
    const collection = database.collection(
      process.env.MONGODB_COLLECTION_USERS,
    );

    const user = await collection.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 },
      );
    }

    const randomToken = crypto.randomBytes(32).toString("hex");
    const encryptedToken = await bcrypt.hash(randomToken, 10);

    await collection.updateOne(
      { _id: user._id },
      {
        $set: {
          forgotPasswordToken: encryptedToken,
          forgotPasswordTokenExpiry: Date.now() + 3600000,
        },
      },
    );

    const ResetPasswordEmailHtml = render(
      <ResetPasswordEmail
        fullName={user.name}
        resetLink={`${process.env.PROJECT_DOMAIN}/reset-password?token=${encryptedToken}`}
      />,
    );

    // https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
    const transport = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_PROJECT_EMAIL,
        pass: process.env.PROJECT_EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_PROJECT_EMAIL,
      to: email,
      subject: "Reset Your Password",
      html: ResetPasswordEmailHtml,
    };

    await transport.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Email sent" },
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
