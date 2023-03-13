import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import {
  GraphQLAddBookMutationResponse,
  GraphQLBook,
  GraphQLMutationAddBookArgs,
  GraphQLMutationResolvers,
  GraphQLQueryResolvers
} from './__generated__/resolvers-types';

interface MyDataSources {
  books: GraphQLBook[];
}

export interface MyContext {
  token?: string;
  dataSources?: MyDataSources
}

const resolvers = {
  Query: {
    books: (parent: any, args: any, context: MyContext) => context.dataSources.books,
  } as GraphQLQueryResolvers,
  Mutation: {
    addBook: (_: any, { title, author }: GraphQLMutationAddBookArgs): GraphQLAddBookMutationResponse => (
      { code: 'success', success: true, message: 'msg', book: { title, author } }
    ),
  } as GraphQLMutationResolvers,
};

const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' });

const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
});

const dataSources: MyDataSources = {
  books: [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ]
};

const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => ({
    token: req.headers.token,
    dataSources,
  }),
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
