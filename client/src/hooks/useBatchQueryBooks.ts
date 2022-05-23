import { useQuery, UseQueryResult } from 'react-query';
import { batchRequests, gql } from 'graphql-request';
import { Book, endpoint } from './index';

interface BookData {
  data: { book: Book };
}

export const useBatchQueryBooks = (): UseQueryResult<BookData[] | undefined> => {
  return useQuery<BookData[], Error>('books',
    async () => batchRequests(endpoint, [
      { document: bookQuery, variables: { title: 'Book 1' } },
      { document: bookQuery, variables: { title: 'Atlanta' } },
    ]),
    {}
  );
};

const bookQuery = gql`
    query book($title: String!) {
        book(title: $title) {
            title
        }
    }
`
