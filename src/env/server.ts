import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  experimental__runtimeEnv: process.env,
  server: {
    BETTER_AUTH_SECRET: z.string().min(1),
    MONGODB_DATABASE: z.string().min(1),
    MONGODB_URI: z.string().min(1),
    RESEND_API_KEY: z.string().min(1),
  },
});
