import { isServer, QueryClient } from '@tanstack/react-query';

let browserQueryClient: QueryClient | undefined = undefined;

export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000 * 5,
        gcTime: 60 * 1000 * 10,
      },
    },
  });
}

export function getQueryClient() {
  if (isServer) {
    return makeQueryClient();
  }

  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient();
  }

  return browserQueryClient;
}
