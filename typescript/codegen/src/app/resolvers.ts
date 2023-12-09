import {
  GraphQLAddBookResponse,
  GraphQLBook,
  GraphQLMutationAddBookArgs,
  GraphQLMutationResolvers,
  GraphQLQueryResolvers,
  GraphQLResolvers
} from '../__generated__/resolvers-types';
import { MyContext } from './server';

// --- QUERY ---
// With type inference from GraphQLQueryResolvers
// const Query: GraphQLQueryResolvers = {
//   books: (parent, args, context) => context.dataSources.books,
// }

const Query: GraphQLQueryResolvers = {
  books: (
    _parent: null,
    _args: unknown,
    context: MyContext
  ): GraphQLBook[] => context.dataSources.books.getBooks(),
}


// --- MUTATION ---
// With type inference from GraphQLMutationResolvers
// const Mutation: GraphQLMutationResolvers = {
//   addBook: (_, { title, author }, context) => (
//     { code: 'success', success: true, message: 'msg', book: { title, author } }
//   ),
// }

const Mutation: GraphQLMutationResolvers = {
  addBook: (_: null, { title, author }: GraphQLMutationAddBookArgs): GraphQLAddBookResponse => {
    return (
      { code: 'success', success: true, message: 'msg', book: { title, author } }
    );
  },
}


export const resolvers: GraphQLResolvers = {
  Query,
  Mutation,
};
