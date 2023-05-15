import { GraphQLMutationResolvers, GraphQLQueryResolvers, GraphQLResolvers } from '../__generated__/resolvers-types';

const Query: GraphQLQueryResolvers = {
  books: (parent, args, context) => context.dataSources.books,
}

/**
 * With more types
 * const query: GraphQLQueryResolvers = {
 *   books: (parent: null, args: unknown, context: MyContext): GraphQLBook[] => context.dataSources.books,
 * }
 * */

const Mutation: GraphQLMutationResolvers = {
  addBook: (_, { title, author }, context) => (
    { code: 'success', success: true, message: 'msg', book: { title, author } }
  ),
}

/**
 * With more types
 * const mutation: GraphQLMutationResolvers = {
 *   addBook: (_: null, { title, author }: GraphQLMutationAddBookArgs): GraphQLAddBookMutationResponse => {
 *     return (
 *       { code: 'success', success: true, message: 'msg', book: { title, author } }
 *     );
 *   },
 * }
 */


export const resolvers: GraphQLResolvers = {
  Query,
  Mutation,
};
