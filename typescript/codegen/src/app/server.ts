import { ApolloServer } from '@apollo/server';
import { resolvers } from './resolvers';
import { typeDefs } from '../graphql/typeDefs';
import { Book, books, Page, pages } from './models';

interface MyDataSources {
  books: BookDataSource;
}

interface BookDataSource {
  getBooks(): Book[];
  getBookById(id: string): Book;
  getPagesByBookId(id: string): Page[];
}

export const dataSources: MyDataSources = {
  books: {
    getBooks: (): Book[] => books,
    getBookById: (id: string): Book | null => books.find(book => book.id === id),
    getPagesByBookId: (id: string): Page[] => pages.find(it => it.bookId === id).pages || [],
  },
};

export interface MyContext {
  token?: string;
  dataSources?: MyDataSources
}

export const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
});
