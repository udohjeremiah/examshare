import connectClient from "@/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import * as bcrypt from "bcrypt";
import generateAvatar from "@/utils/generateAvatar";
import type { NextAuthOptions, Session } from "next-auth";
import type { JWT } from "next-auth/jwt";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      async authorize(credentials): Promise<any> {
        if (!credentials?.email || !credentials?.password) return null;

        try {
          const client = await connectClient();
          const database = client.db(process.env.MONGODB_DATABASE);
          const collection = database.collection(
            process.env.MONGODB_COLLECTION_USERS,
          );

          let user = await collection.findOne({ email: credentials.email });
          if (!user) return null;
          if (!user.emailVerified) return null;

          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.password,
          );
          if (!isPasswordValid) return null;

          // Migration from Google/GitHub images
          if (user.image && !user.image.startsWith("<svg")) {
            const newImage = generateAvatar(user.name);

            const updatedUser = await collection.findOneAndUpdate(
              { email: user.email },
              { $set: { image: newImage } },
              { returnDocument: "after" },
            );

            user = updatedUser;
          }

          return user;
        } catch {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      try {
        const client = await connectClient();
        const database = client.db(process.env.MONGODB_DATABASE);
        const collection = database.collection(
          process.env.MONGODB_COLLECTION_USERS,
        );

        const existingUser = await collection.findOne({ email: token.email });
        if (existingUser) {
          session.user.id = String(existingUser._id);
          session.user.userName = existingUser.userName;
        }

        return session;
      } catch {
        return session;
      }
    },
  },
  pages: {
    signIn: "/signin",
  },
};
