import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_PROJECT_EMAIL,
    pass: process.env.PROJECT_EMAIL_PASSWORD,
  },
});

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  await transport.sendMail({
    from: process.env.NEXT_PUBLIC_PROJECT_EMAIL,
    to,
    subject,
    html,
  });
}
