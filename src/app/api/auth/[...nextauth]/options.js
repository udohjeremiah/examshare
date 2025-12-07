import connectClient from "@/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import * as bcrypt from "bcrypt";
import generateAvatar from "@/utils/generateAvatar";

export const options = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
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
          if (!user.image.startsWith("<svg")) {
            const newImage = generateAvatar(user.name);

            const updatedUser = await collection.findOneAndUpdate(
              { email: user.email },
              { $set: { image: newImage } },
              { returnDocument: "after" },
            );

            user = updatedUser;
          }

          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      try {
        const client = await connectClient();
        const database = client.db(process.env.MONGODB_DATABASE);
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
        return session;
      }
    },
  },
  pages: {
    signIn: "/signin",
  },
};
