import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import nock from 'nock';
import { renderHook, waitFor } from '@testing-library/react';
import request, { gql } from 'graphql-request';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true
    }
  }
});

const wrapper = ({ children }: any): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);
const url = new URL('http://example.com/api/data');

const useFetchData = () => {
  const { data } = useQuery('fetchData', () => request(
    url.toString(),
    gql`query AllBooks { allBooks { title } }`,
    {}));
  console.log(`useFetchData ${JSON.stringify(data)}`);
  return data;
}

describe('hook test', () => {
  const scope = nock(url.toString())
    .post('')
    .reply(200, {
      data: { allBooks: [{ title: 'hello' }] }
    });

  it('fetches the answer', async () => {
    const { result } = renderHook(() => useFetchData(), { wrapper });
    await waitFor(() => result.current.loading === false);
    console.log(result)
    expect(result.current).toEqual({ allBooks: [{ title: 'hello' }] });
    expect(scope.isDone()).toBeTruthy()
  });
});
