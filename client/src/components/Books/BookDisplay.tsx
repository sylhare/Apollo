import { useQueryBook } from '../../hooks/useBatchQueryBooks';

export function BookDisplay(): JSX.Element {
  const { data, isLoading, isError } = useQueryBook('Book 1');
  if (!data) return (<div> No books </div>)
  if (isError) return (<div> Error! 📖 + 🔥= 😵 </div>)
  if (isLoading) return (<div> Loading... </div>)

  return (
    <div>
      <ul>
        <li key={1}>{data.book.title}</li>
      </ul>
    </div>
  );
}
