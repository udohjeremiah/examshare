import { NextResponse } from "next/server";
import { render } from "@react-email/components";
import SubmitPastQuestionEmail from "@/emails/submit-past-question-email";
import nodemailer from "nodemailer";
import { join } from "path";
import { writeFile } from "fs/promises";

export async function POST(request) {
  try {
    const formData = await request.formData();

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phoneNumber = formData.get("phoneNumber");
    const nameOfInstitution = formData.get("nameOfInstitution");
    const statusAtInstitution = formData.get("statusAtInstitution");
    const department = formData.get("department");
    const level = formData.get("level");
    const session = formData.get("session");
    const semester = formData.get("semester");
    const pastQuestion = formData.get("pastQuestion");

    if (
      !firstName ||
      !lastName ||
      !email ||
      !nameOfInstitution ||
      !statusAtInstitution ||
      !department ||
      !level ||
      !session ||
      !semester ||
      !pastQuestion
    ) {
      return NextResponse.json(
        { success: false, message: "Bad request" },
        { status: 400 },
      );
    }

    const SubmitPastQuestionEmailHtml = render(
      <SubmitPastQuestionEmail fullName={`${firstName} ${lastName}`} />,
    );

    const bytes = await pastQuestion.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const path = join("/", "tmp", pastQuestion.name);
    await writeFile(path, buffer);

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
      subject: nameOfInstitution,
      text: `${firstName} ${lastName}`,
      html: `
    <h2>Sender</h2>
    <p>Name: ${firstName} ${lastName}<p>
    <p>Email: ${email}</p>
    ${phoneNumber === "" ? "" : `<p>Phone Number: ${phoneNumber}</p>`}
    <p>Name of Institution: ${nameOfInstitution}</p>
    <p>Status at Institution: ${statusAtInstitution}</p>
    <h2>Past Question</h2>
    <p>Department: ${department}</p>
    <p>Level: ${level}</p>
    <p>Session: ${session}</p>
    <p>Semester: ${semester}</p>
    `,
      attachments: [
        {
          filename: pastQuestion.name,
          path: `/tmp/${pastQuestion.name}`,
        },
      ],
    };

    const mailOptionsUser = {
      from: process.env.PROJECT_EMAIL_USER,
      to: email,
      subject: "Past Question Submitted Successfully",
      html: SubmitPastQuestionEmailHtml,
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
