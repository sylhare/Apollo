import { batchRequests, gql } from 'graphql-request';
import { useQuery, UseQueryResult } from 'react-query';
import { Book, endpoint } from './index';

interface AddBookData {
    data: { addBook: { book: Book } };
}

const addBook = gql`
    mutation addBook($input: AddBookInput){
        addBook(input: $input) {
            book { title, author { name } }
        }
    }`

export const useAddBooks = (): UseQueryResult<AddBookData[] | undefined> => {
    return useQuery<AddBookData[], Error>('addBooks',
      async () => batchRequests(endpoint, [
          { document: addBook, variables: { input: { title: "book A", authorName: "author A" } } },
          { document: addBook, variables: { input: { title: "book B", authorName: "author B" } } },
          { document: addBook, variables: { input: { title: "book C", authorName: "author C" } } },
      ]),
      {}
    );
};

