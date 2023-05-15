import { startStandaloneServer } from '@apollo/server/standalone';
import {
  GraphQLAddBookMutationResponse,
  GraphQLBook,
  GraphQLMutationAddBookArgs,
  GraphQLMutationResolvers,
  GraphQLQueryResolvers
} from './__generated__/resolvers-types';
import { dataSources, server } from './app/server';




const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => ({
    token: req.headers.token,
    dataSources,
  }),
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
