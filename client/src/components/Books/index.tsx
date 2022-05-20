
import { QueryClient, QueryClientProvider } from 'react-query';
import { useQueryAllBooks } from '../../hooks/useQueryAllBooks';
import { useQueryBooks } from '../../hooks/useQueryBooks';
import { useBatchQueryBooks } from '../../hooks/useBatchQueryBooks';

function BookItems(): JSX.Element {
  const { data } = useQueryAllBooks();
  if (!data) return (<div> No books, start the typescript API first </div>)

  return (
    <div>
      <ul>
        {data.allBooks.map(book => (<li key={book.title}>{book.title}</li>))}
      </ul>
    </div>
  );
}

function OtherBookItems(): JSX.Element {
  const { data } = useQueryBooks();
  if (!data) return (<div> No books, start the typescript API first </div>)

  return (
    <div>
      <ul>
        <li key={1}>{data.book.title}</li>
      </ul>
    </div>
  );
}
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
      <BookItems/>
      <OtherBookItems/>
    </QueryClientProvider>
  )
}
