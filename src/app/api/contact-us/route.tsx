import { NextRequest, NextResponse } from "next/server";
import * as nodemailer from "nodemailer";

import { env as publicEnv } from "@/env/client";
import { env } from "@/env/server";

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, lastName, message, phoneNumber, subject } =
      await request.json();

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { message: "Bad request", success: false },
        { status: 400 },
      );
    }

    const contactUsEmailHtml = `
      <h2>Message Received</h2>
      <p>Hello ${firstName} ${lastName},</p>
      <p>Thank you for reaching out to us. Your message has been received successfully. Our team is currently reviewing the details you provided, and we will get back to you as soon as possible.</p>
      <p>Please note that this email is an automated acknowledgment and does not require a reply. However, rest assured that we will continue to communicate with you within this same email thread when we are ready to respond to your message.</p>
      <p>We appreciate your patience and look forward to assisting you.</p>
    `;

    // https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
    const transport = nodemailer.createTransport({
      auth: {
        pass: env.PROJECT_EMAIL_PASSWORD,
        user: publicEnv.NEXT_PUBLIC_PROJECT_EMAIL,
      },
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
    });

    const mailOptionsAdmin = {
      from: publicEnv.NEXT_PUBLIC_PROJECT_EMAIL,
      html: `
      <h2>Sender</h2>
      <p>Name: ${firstName} ${lastName}<p>
      <p>Email: ${email}</p>
      ${phoneNumber === "" ? "" : `<p>Phone Number: ${phoneNumber}</p>`}
      <h2>Message</h2>
      <h3>Subject: ${subject}</h3>
      <p>${message}</p>
      `,
      // cc: email, (uncomment this line if you want to send a copy to the sender)
      subject: subject,
      text: message,
      to: publicEnv.NEXT_PUBLIC_PROJECT_EMAIL,
    };

    const mailOptionsUser = {
      from: publicEnv.NEXT_PUBLIC_PROJECT_EMAIL,
      html: contactUsEmailHtml,
      subject: `Re: ${subject}`,
      to: email,
    };

    await transport.sendMail(mailOptionsAdmin);
    await transport.sendMail(mailOptionsUser);

    return NextResponse.json(
      { message: "Email sent", success: true },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
