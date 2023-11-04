import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { join } from "path";
import { writeFile } from "fs/promises";

export async function POST(request) {
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
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
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

  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json(
      { success: true, message: "Email sent" },
      { status: 200 },
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
