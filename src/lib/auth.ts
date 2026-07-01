import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";

import { env } from "@/env/server";
import { databaseClient } from "@/lib/database-client";

import { sendEmail } from "./email";

export const auth = betterAuth({
  database: mongodbAdapter(databaseClient.db(env.MONGODB_DATABASE), {
    client: databaseClient,
  }),
  emailAndPassword: {
    autoSignIn: true,
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ url, user }) => {
      await sendEmail({
        html: `<p>Hi ${user.name},</p><p>Click <a href="${url}">here</a> to reset your password.</p>`,
        subject: "Reset Your Password",
        to: user.email,
      });
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    sendVerificationEmail: async ({ url, user }) => {
      await sendEmail({
        html: `<p>Hi ${user.name},</p><p>Click <a href="${url}">here</a> to verify your email address.</p>`,
        subject: "Verify Your Account",
        to: user.email,
      });
    },
  },
  experimental: { joins: true },
  plugins: [nextCookies()],
});
