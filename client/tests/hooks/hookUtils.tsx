import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';

const queryClient = new QueryClient({
  defaultOptions: { queries: { suspense: true }, },
});

export const wrapper = ({ children }: { children: React.ReactNode}): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);
