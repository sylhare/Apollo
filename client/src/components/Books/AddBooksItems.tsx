import { useAddBooks, useAddBooksMutation } from '../../hooks/useAddBooks';

export function AddBooksItems(): JSX.Element {
  const mutation = useAddBooksMutation();
  const { data } = useAddBooks();
  if (!data) return (<div> No books, start the typescript API first </div>)

  return (
    <div>
      <ul>
        {data.map(d => (<li key={d.data.addBook.book.title + '-add'}>
          {d.data.addBook.book.title + ' by ' + d.data.addBook.book.author.name }
        </li>))}
        <li><button onClick={() => mutation.mutate()}> Click to add Books! </button></li>
        {mutation.isSuccess && mutation.data?.map(d => (<li key={d.data.addBook.book.title + '-add'}>
          {d.data.addBook.book.title + ' by ' + d.data.addBook.book.author.name }
        </li>))}
      </ul>
    </div>
  );
}
