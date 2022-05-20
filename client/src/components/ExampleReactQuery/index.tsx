import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { RepoData } from './RepoData';

const queryClient = new QueryClient();

export default function ExampleReactQuery() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example/>
    </QueryClientProvider>
  )
}

function Example(): JSX.Element {
  const { isLoading, error, data } = useQuery<RepoData, Error>('repoData', () =>
    fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
      res.json()
    )
  )

  if (isLoading) return <div> {'Loading...'} </div>
  if (error || !data) return <div> {'An error has occurred: ' + error?.message} </div>

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  )
}
