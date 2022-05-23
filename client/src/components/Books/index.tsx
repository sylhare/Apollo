import { QueryClient, QueryClientProvider } from 'react-query';
import { BatchBookItems } from './BatchBookItems';
import { AllBooksItems } from './AllBooksItems';
import { CombinedBookItems } from './CombinedBookItems';
import { AddBooksItems } from './AddBooksItems';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 3000,
    },
  },
});

export default function Book() {
  return (
    <QueryClientProvider client={queryClient}>
      <AllBooksItems/>
      <CombinedBookItems/>
      <BatchBookItems/>
      <AddBooksItems/>
    </QueryClientProvider>
  )
}
