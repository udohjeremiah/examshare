import { render } from "@react-email/components";
import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "node:fs/promises";
import nodePath from "node:path";
import * as nodemailer from "nodemailer";

import { SubmitPastQuestionEmail } from "@/emails/submit-past-question-email";
import { env as publicEnv } from "@/env/client";
import { env } from "@/env/server";

export async function POST(request: NextRequest) {
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
    const pastQuestion = formData.get("pastQuestion") as File;

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
        { message: "Bad request", success: false },
        { status: 400 },
      );
    }

    const SubmitPastQuestionEmailHtml = render(
      <SubmitPastQuestionEmail fullName={`${firstName} ${lastName}`} />,
    );

    const bytes = await pastQuestion.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filePath = nodePath.join("/", "tmp", pastQuestion.name);
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    await writeFile(filePath, buffer);

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
      attachments: [
        {
          filename: pastQuestion.name,
          path: `/tmp/${pastQuestion.name}`,
        },
      ],
      from: publicEnv.NEXT_PUBLIC_PROJECT_EMAIL,
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
      // cc: email, (uncomment this line if you want to send a copy to the sender)
      subject: String(nameOfInstitution),
      text: `${firstName} ${lastName}`,
      to: publicEnv.NEXT_PUBLIC_PROJECT_EMAIL,
    };

    const mailOptionsUser = {
      from: publicEnv.NEXT_PUBLIC_PROJECT_EMAIL,
      html: SubmitPastQuestionEmailHtml,
      subject: "Past Question Submitted Successfully",
      to: email,
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await transport.sendMail(mailOptionsAdmin as any);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await transport.sendMail(mailOptionsUser as any);

    return NextResponse.json(
      { message: "Email sent", success: true },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
