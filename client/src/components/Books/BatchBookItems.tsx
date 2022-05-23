import { useBatchQueryBooks } from '../../hooks/useBatchQueryBooks';

export function BatchBookItems(): JSX.Element {
  const { data } = useBatchQueryBooks();
  if (!data) return (<div> No books, start the typescript API first </div>)

  return (
    <div>
      <ul>
        {data.map(d => (<li key={d.data.book.title + '-batch'}>{d.data.book.title}</li>))}
      </ul>
    </div>
  );
}
