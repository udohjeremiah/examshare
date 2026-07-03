import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";

import { env as publicEnv } from "@/env/client";
import { env } from "@/env/server";
import { databaseClient } from "@/lib/database-client";
import { resend } from "@/lib/resend";

export const auth = betterAuth({
  database: mongodbAdapter(databaseClient.db(env.MONGODB_DATABASE), {
    client: databaseClient,
  }),
  emailAndPassword: {
    autoSignIn: true,
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ url, user }) => {
      await resend.emails.send({
        from: publicEnv.NEXT_PUBLIC_PROJECT_EMAIL,
        html: `<p>Hi ${user.name},</p><p>Click <a href="${url}">here</a> to reset your password.</p>`,
        subject: "Reset Your Password",
        to: user.email,
      });
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    sendVerificationEmail: async ({ url, user }) => {
      await resend.emails.send({
        from: publicEnv.NEXT_PUBLIC_PROJECT_EMAIL,
        html: `<p>Hi ${user.name},</p><p>Click <a href="${url}">here</a> to verify your email address.</p>`,
        subject: "Verify Your Account",
        to: user.email,
      });
    },
  },
  experimental: { joins: true },
  plugins: [nextCookies()],
});
