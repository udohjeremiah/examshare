import {
  defaultShouldDehydrateQuery,
  environmentManager,
  QueryClient,
} from "@tanstack/react-query";

export function queryClient() {
  if (environmentManager.isServer()) {
    return makeQueryClient();
  }

  const globalWithQueryClient = globalThis as typeof globalThis & {
    _browserQueryClient?: QueryClient;
  };

  if (!globalWithQueryClient._browserQueryClient) {
    globalWithQueryClient._browserQueryClient = makeQueryClient();
  }
  return globalWithQueryClient._browserQueryClient;
}

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      dehydrate: {
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
      },
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
}
