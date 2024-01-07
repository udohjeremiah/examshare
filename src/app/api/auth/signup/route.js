import { NextResponse } from "next/server";
import connectClient from "@/db/client";
import crypto from "crypto";
import * as bcrypt from "bcrypt";
import { render } from "@react-email/components";
import WelcomeEmail from "@/emails/welcome-email";
import nodemailer from "nodemailer";
import generateAvatar from "@/utils/generateAvatar";

export async function POST(request) {
  try {
    const { fullName, email, password } = await request.json();

    if (!fullName || !email || !password) {
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

    const user = await collection.findOne({ email: email });
    if (user && user.emailVerified) {
      return NextResponse.json(
        {
          success: false,
          message: "Email address already exists",
        },
        { status: 409 },
      );
    }

    const randomToken = crypto.randomBytes(32).toString("hex");
    const encryptedToken = await bcrypt.hash(randomToken, 10);

    await collection.updateOne(
      { email: email },
      {
        $set: {
          name: fullName,
          userName: email.split("@")[0],
          emailVerified: false,
          password: await bcrypt.hash(password, 10),
          image: generateAvatar(fullName),
          verifyEmailToken: encryptedToken,
          verifyEmailTokenExpiry: Date.now() + 3600000, // 1hr
        },
      },
      { upsert: true },
    );

    const welcomeEmailHtml = render(
      <WelcomeEmail
        fullName={fullName}
        verificationLink={`${process.env.PROJECT_DOMAIN}/verify-email?token=${encryptedToken}`}
      />,
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
      to: email,
      subject: "Verify Your Account",
      html: welcomeEmailHtml,
    };

    await transport.sendMail(mailOptions);

    return NextResponse.json(
      {
        success: true,
        message: "New user successfully created and email sent.",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: error },
      { status: 500 },
    );
  }
}
