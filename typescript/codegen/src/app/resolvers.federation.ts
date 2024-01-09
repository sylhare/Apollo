import { MyContext } from './server';
import {
  GraphQLBook,
  GraphQLBookResolvers,
  GraphQLMutationAddBookArgs,
  GraphQLMutationResolvers,
  GraphQLPage,
  GraphQLQueryPagesArgs,
  GraphQLQueryResolvers,
  GraphQLResolvers,
  GraphQLResolversTypes
} from '../__generated__/resolvers-types.federation';
import { BookCategory } from './models';

const Query: GraphQLQueryResolvers = {
  books: (
    _parent: null,
    _args: null,
    context: MyContext
  ): GraphQLResolversTypes['Books'] => context.dataSources.books.getBooks(),
  pages: (
    _parent: null,
    { bookId }: GraphQLQueryPagesArgs,
    context: MyContext
  ): GraphQLPage[] => context.dataSources.books.getPagesByBookId(bookId),
}

const Mutation: GraphQLMutationResolvers = {
  addBook: (
    _: null,
    { input: { title, author, category, editorId } }: GraphQLMutationAddBookArgs
  ): GraphQLResolversTypes['AddBookResponse'] => {
    return ({
      code: 'success', success: true, message: 'msg',
      book: {
        id: '1',
        title: title ?? "title",
        author: author ?? "author",
        editor: { id: editorId ?? 'one' },
        category: category ?? BookCategory.Education,
        pages: [{ number: 1, content: 'page' }]
      }
    });
  },
}

const Book: GraphQLBookResolvers = {
  __resolveReference: (
    book: { id: string },
    { dataSources: { books } }: MyContext
  ): GraphQLResolversTypes['Books'] => books.getBookById(book.id),
  pages: (
    book: GraphQLBook, // Could be only the GraphQL Object + any extra data from the parent's resolver
    _args: null,
    { dataSources: { books } }: MyContext
  ): GraphQLPage[] => books.getPagesByBookId(book.id),
  title: (parent: GraphQLBook) => {
    return parent.title.toUpperCase();
  },
}

export const resolvers: GraphQLResolvers = {
  Query,
  Mutation,
  Book,
};
