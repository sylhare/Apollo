import { renderHook, waitFor } from '@testing-library/react';
import { useQueryBook } from '../../src/hooks/useBatchQueryBooks';
import { QueryClient, QueryClientProvider } from 'react-query';
import nock from 'nock';
import React from 'react';

const queryClient = new QueryClient({
  defaultOptions: { queries: { suspense: true }, },
});

const wrapper = ({ children }: { children: React.ReactNode}): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

describe('useQueryBook', () => {
  beforeEach(() => nock.cleanAll());

  it('should query a book', async () => {
    nock('http://localhost:3000')
      .post('/graphql')
      .reply(200, {
        data: { book: { title: 'title', author: { name: 'author' } } }
      });
    const { result } = renderHook(() => useQueryBook('title'), { wrapper });
    await waitFor(() => result.current.isSuccess);
    expect(result.current.data?.book).toEqual({ title: 'title', author: { name: 'author' } });
  })
});
