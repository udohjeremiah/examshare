import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_PROJECT_EMAIL: z.string().min(1),
    NEXT_PUBLIC_API_BASE_URL: z.url(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_PROJECT_EMAIL: process.env.NEXT_PUBLIC_PROJECT_EMAIL,
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
});
