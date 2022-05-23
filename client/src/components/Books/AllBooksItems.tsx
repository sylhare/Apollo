import { useQueryAllBooks } from '../../hooks/useQueryAllBooks';

export function AllBooksItems(): JSX.Element {
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
