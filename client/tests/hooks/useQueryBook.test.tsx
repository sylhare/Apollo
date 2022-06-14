import nock from 'nock';
import { renderHook, waitFor } from '@testing-library/react';
import { wrapper } from './hookUtils';
import { useQueryBook } from '../../src/hooks/useBatchQueryBooks';

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
  });
});
