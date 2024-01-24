import { MyContext } from './server';
import {
  GraphQLBook,
  GraphQLBookResolvers,
  GraphQLMutationAddBookArgs,
  GraphQLMutationResolvers,
  GraphQLPage,
  GraphQLPageResolvers,
  GraphQLQueryPagesArgs,
  GraphQLQueryResolvers,
  GraphQLResolvers,
  GraphQLResolversTypes,
} from '../__generated__/resolvers-types.federation';
import { BookCategory } from './models';

const Query: GraphQLQueryResolvers = {
  books,
  pages,
}

function books(
  _parent: null,
  _args: null,
  context: MyContext
): Array<GraphQLResolversTypes['Book']> {
  return context.dataSources.books.getBooks();
}

function pages(
  _parent: any,
  { bookId }: GraphQLQueryPagesArgs,
  context: MyContext
): GraphQLResolversTypes['Page'][] {
  return context.dataSources.books.getPagesByBookId(bookId);
}

const Mutation: GraphQLMutationResolvers = {
  addBook: (
    _: null,
    { input: { title, author, category, editorId } }: GraphQLMutationAddBookArgs
  ): GraphQLResolversTypes['AddBookResponse'] => {
    return {
      code: 'success', success: true, message: 'msg',
      book: {
        id: '1',
        title: title ?? "title",
        author: author ?? "author",
        editor: { id: editorId ?? 'one' },
        category: category ?? BookCategory.Education,
        pages: [{ number: 1, content: 'page' }]
      }
    };
  },
}

const Book: GraphQLBookResolvers = {
  __resolveReference: (
    book: { id: string },
    { dataSources: { books } }: MyContext
  ): GraphQLResolversTypes['Book'] => books.getBookById(book.id),
  pages: (
    book: GraphQLBook,
    _args: null,
    { dataSources: { books } }: MyContext
  ): GraphQLResolversTypes['Page'][] =>
    books.getPagesByBookId(book.id)
      .map(page => ({ ...page, book })), // add the book to the page directly so the `book` resolver doesn't have to fetch it again.
  title: (parent: GraphQLBook) => parent.title.toUpperCase(),
}

const Page: GraphQLPageResolvers = {
  book: (
    page: GraphQLPage & { bookId?: string },  // bookId is not on the GraphQLPage type, but used internally and returned by the parent resolver
    _args: null,
    { dataSources: { books } }: MyContext
  ): GraphQLResolversTypes['Book'] => {
    return books.getBookById(page.bookId);
  }
}

export const resolvers: GraphQLResolvers = {
  Query,
  Mutation,
  Book,
  Page
};
