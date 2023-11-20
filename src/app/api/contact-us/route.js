import { NextResponse } from "next/server";
import { render } from "@react-email/components";
import ContactUsEmail from "@/emails/contact-us-email";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { firstName, lastName, email, phoneNumber, subject, message } =
      await request.json();

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "Bad request" },
        { status: 400 },
      );
    }

    const contactUsEmailHtml = render(
      <ContactUsEmail
        fullName={`${firstName} ${lastName}`}
        subject={subject}
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

    const mailOptionsAdmin = {
      from: process.env.PROJECT_EMAIL_USER,
      to: process.env.PROJECT_EMAIL_USER,
      // cc: email, (uncomment this line if you want to send a copy to the sender)
      subject: subject,
      text: message,
      html: `
      <h2>Sender</h2>
      <p>Name: ${firstName} ${lastName}<p>
      <p>Email: ${email}</p>
      ${phoneNumber === "" ? "" : `<p>Phone Number: ${phoneNumber}</p>`}
      <h2>Message</h2>
      <h3>Subject: ${subject}</h3>
      <p>${message}</p>
      `,
    };

    const mailOptionsUser = {
      from: process.env.PROJECT_EMAIL_USER,
      to: email,
      subject: `Re: ${subject}`,
      html: contactUsEmailHtml,
    };

    await transport.sendMail(mailOptionsAdmin);
    await transport.sendMail(mailOptionsUser);

    return NextResponse.json(
      { success: true, message: "Email sent" },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
