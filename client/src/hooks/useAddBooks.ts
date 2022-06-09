import { batchRequests, gql } from 'graphql-request';
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from 'react-query';
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

export const useAddBooksMutation = (): UseMutationResult<AddBookData[] | undefined, Error, void> => {
  return useMutation<AddBookData[], Error>('addBooks',
    async () => batchRequests(endpoint, [
      { document: addBook, variables: { input: { title: "book D", authorName: "author D" } } },
      { document: addBook, variables: { input: { title: "book E", authorName: "author E" } } },
      { document: addBook, variables: { input: { title: "book F", authorName: "author F" } } },
    ]),
    {}
  );
};


