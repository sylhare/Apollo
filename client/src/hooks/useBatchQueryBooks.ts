import { useQuery, UseQueryResult } from 'react-query';
import request, { batchRequests, gql } from 'graphql-request';
import { Book, endpoint } from './index';

interface BatchBookData {
  data: { book: Book };
}

interface BookData {
  book: Book;
}

export const useBatchQueryBooks = (): UseQueryResult<BatchBookData[] | undefined> => {
  return useQuery<BatchBookData[], Error>('books',
    async () => batchRequests(endpoint, [
      { document: bookQuery, variables: { title: 'Book 1' } },
      { document: bookQuery, variables: { title: 'Atlanta' } },
    ]),
    {}
  );
};

export const useQueryBook = (title: string): UseQueryResult<BookData | undefined> => {
  return useQuery<BookData, Error>(
    `query book ${title}`,
    () => queryBook(title),
    {}
  );
};

const queryBook = async (title: string): Promise<BookData> => request(endpoint, bookQuery, { title })

const bookQuery = gql`
    query book($title: String!) {
        book(title: $title) {
            title
        }
    }
`
