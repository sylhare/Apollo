import nock from 'nock';
import { renderHook, waitFor } from '@testing-library/react';
import { wrapper } from './hookUtils';
import { useAddBooks, useAddBooksMutation } from '../../src/hooks/useAddBooks';

describe('useAddBooks', () => {
  const booksData = {
    data: [
      { data: { addBook: { book: { title: 'book D', author: { name: 'author D' } } } } },
      { data: { addBook: { book: { title: 'book E', author: { name: 'author E' } } } } },
      { data: { addBook: { book: { title: 'book F', author: { name: 'author F' } } } } },
    ]
  }
  beforeEach(() => nock('http://localhost:3000')
    .post('/graphql')
    .reply(200, booksData));
  afterEach(() => nock.cleanAll());

  it('should add books', async () => {
    const { result } = renderHook(() => useAddBooks(), { wrapper });
    await waitFor(() => result.current.isSuccess);
    expect(result.current.data).toEqual(booksData);
  });

  it('should add books with mutate', async () => {
    const { result } = renderHook(() => useAddBooksMutation().mutateAsync(), { wrapper });
    await waitFor(() => result.current);
    await expect(result.current).resolves.toEqual(booksData);
  })
});
