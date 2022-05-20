import { useQuery, UseQueryResult } from "react-query";
import request, { gql } from 'graphql-request';
import { Book, endpoint } from './index';

interface BooksData {
  allBooks: Book[];
}

export const useQueryAllBooks = (): UseQueryResult<BooksData | undefined> => {
  return useQuery<BooksData, Error>('AllBooks',
    async () => request(endpoint, booksQuery, {}),
    {}
  );
};

const booksQuery = gql`
    query AllBooks {
        allBooks {
            title
        }
    }
`
