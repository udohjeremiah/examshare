import type { HTTPError } from "ky";

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: HTTPError;
  }
}
