import { useQueryBooks } from '../../hooks/useQueryBooks';

export function CombinedBookItems(): JSX.Element {
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
