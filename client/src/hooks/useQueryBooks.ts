import { useQuery, UseQueryResult } from 'react-query';
import { request } from 'graphql-request';
import gql from 'graphql-tag'
import combineQuery from 'graphql-combine-query'
import { Book, endpoint } from './index';

interface BookData {
  book: Book;
}


export const useQueryBooks = (): UseQueryResult<BookData | undefined> => {
  const { document, variables } = (() => combineQuery('MultipleBooks')
      .add(bookQuery, { title: "Book 1" })
    // .add(bookQuery, { title: 'Atlanta' }) // is not handled by library
  )()
  return useQuery<BookData, Error>('MultipleBooks',
    async () => request(endpoint, document, variables),
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
