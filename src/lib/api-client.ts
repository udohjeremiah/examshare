import ky from "ky";

import { env } from "@/env/client";

export const apiClient = ky.create({
  baseUrl: env.NEXT_PUBLIC_API_BASE_URL,
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
});
