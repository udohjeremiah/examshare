import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    MONGODB_URI: z.string().min(1),
    MONGODB_DATABASE: z.string().min(1),
    MONGODB_COLLECTION_ANSWERS: z.string().min(1),
    PROJECT_EMAIL_PASSWORD: z.string().min(1),
    BETTER_AUTH_SECRET: z.string().min(1),
    BETTER_AUTH_URL: z.url(),
  },
  client: {
    NEXT_PUBLIC_PROJECT_EMAIL: z.string().min(1),
  },
  clientPrefix: "NEXT_PUBLIC_",
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
