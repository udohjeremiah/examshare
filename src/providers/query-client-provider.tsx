"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { queryClient } from "@/lib/query-client";

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const qc = queryClient();

  return (
    <QueryClientProvider client={qc}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
