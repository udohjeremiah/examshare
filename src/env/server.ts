import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  experimental__runtimeEnv: process.env,
  server: {
    BETTER_AUTH_SECRET: z.string().min(1),
    BETTER_AUTH_URL: z.url(),
    MONGODB_COLLECTION_ANSWERS: z.string().min(1),
    MONGODB_DATABASE: z.string().min(1),
    MONGODB_URI: z.string().min(1),
    PROJECT_EMAIL_PASSWORD: z.string().min(1),
  },
});
