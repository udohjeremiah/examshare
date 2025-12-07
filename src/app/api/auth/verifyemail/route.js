import { NextResponse } from "next/server";
import connectClient from "@/db/client";
import { render } from "@react-email/components";
import VerifyEmailSuccessfulEmail from "@/emails/verify-email-successful-email";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { token } = await request.json();

    if (!token) {
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

    const user = await collection.findOne({ verifyEmailToken: token });
    if (!user) {
      return NextResponse.json(
        { success: false, message: "Token not valid" },
        { status: 404 },
      );
    }

    if (user.verifyEmailTokenExpiry < Date.now()) {
      return NextResponse.json(
        { success: false, message: "Token has expired" },
        { status: 404 },
      );
    }

    await collection.updateOne(
      { verifyEmailToken: token },
      {
        $set: {
          emailVerified: true,
          providedAnswers: 0,
          totalUpvotesReceived: 0,
        },
        $unset: {
          verifyEmailToken: "",
          verifyEmailTokenExpiry: "",
        },
      },
    );

    const verifyEmailSuccessfulEmailHtml = render(
      <VerifyEmailSuccessfulEmail fullName={user.name} />,
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
      to: user.email,
      subject: "Welcome to ExamShare",
      html: verifyEmailSuccessfulEmailHtml,
    };

    await transport.sendMail(mailOptions);

    return NextResponse.json(
      {
        success: true,
        message: "Email address successfully verified and email sent",
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
