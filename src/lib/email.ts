import * as nodemailer from "nodemailer";

import { env as publicEnv } from "@/env/client";
import { env } from "@/env/server";

const transport = nodemailer.createTransport({
  auth: {
    pass: env.PROJECT_EMAIL_PASSWORD,
    user: publicEnv.NEXT_PUBLIC_PROJECT_EMAIL,
  },
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
});

export async function sendEmail({
  html,
  subject,
  to,
}: {
  html: string;
  subject: string;
  to: string;
}) {
  await transport.sendMail({
    from: publicEnv.NEXT_PUBLIC_PROJECT_EMAIL,
    html,
    subject,
    to,
  });
}
