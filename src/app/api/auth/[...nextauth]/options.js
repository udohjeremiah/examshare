import connectClient from "@/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import * as bcrypt from "bcrypt";
import { render } from "@react-email/components";
import VerifyEmailSuccessfulEmail from "@/emails/verify-email-successful-email";
import nodemailer from "nodemailer";
import generateAvatar from "@/utils/generateAvatar";

async function sendWelcomeEmail(account, name, email) {
  const verifyEmailSuccessfulEmailHtml = render(
    <VerifyEmailSuccessfulEmail fullName={name} />,
  );

  if (!(account.provider === "google" || account.provider === "github")) {
    return;
  }

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

  const mailOptions = {
    from: process.env.PROJECT_EMAIL_USER,
    to: email,
    subject: "Welcome to ExamShare",
    html: verifyEmailSuccessfulEmailHtml,
  };

  await transport.sendMail(mailOptions);
}

export const options = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const client = await connectClient();
          const database = client.db(process.env.MONGODB_DATABSE);
          const collection = database.collection(
            process.env.MONGODB_COLLECTION_USERS,
          );

          const user = await collection.findOne({ email: credentials.email });

          if (
            user &&
            user.emailVerified &&
            (await bcrypt.compare(credentials.password, user.password))
          ) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        const client = await connectClient();
        const database = client.db(process.env.MONGODB_DATABSE);
        const collection = database.collection(
          process.env.MONGODB_COLLECTION_USERS,
        );

        const existingUser = await collection.findOne({ email: user.email });

        if (existingUser) {
          await collection.updateOne(
            {
              email: user.email,
            },
            {
              $set: {
                email: user.email,
                name: user.name,
                userName: user.email.split("@")[0],
                image: user.image,
              },
            },
          );
        } else {
          await collection.insertOne({
            email: user.email,
            name: user.name,
            userName: user.email.split("@")[0],
            image: user.image || generateAvatar(user.name),
            emailVerified: true,
            providedAnswers: 0,
            totalUpvotesReceived: 0,
          });

          await sendWelcomeEmail(account, user.name, user.email);
        }

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },

    async session({ session, token, user }) {
      try {
        const client = await connectClient();
        const database = client.db(process.env.MONGODB_DATABSE);
        const collection = database.collection(
          process.env.MONGODB_COLLECTION_USERS,
        );

        const existingUser = await collection.findOne({ email: token.email });
        if (existingUser) {
          session.user.id = existingUser._id;
          session.user.userName = existingUser.userName;
        }

        return session;
      } catch (error) {
        console.log(error);
        return session;
      }
    },
  },
  pages: {
    signIn: "/signin",
  },
};
