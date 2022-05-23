import { useAddBooks } from '../../hooks/useAddBook';

export function AddBooksItems(): JSX.Element {
  const { data } = useAddBooks();
  if (!data) return (<div> No books, start the typescript API first </div>)

  return (
    <div>
      <ul>
        {data.map(d => (<li key={d.data.addBook.book.title + '-add'}>
          {d.data.addBook.book.title + ' by ' + d.data.addBook.book.author.name }
        </li>))}
      </ul>
    </div>
  );
}
