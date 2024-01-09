import { ApolloServer } from '@apollo/server';
import { typeDefsFederated } from './graphql/typeDefs';
import { resolvers } from './app/resolvers.federation';
import { dataSources, MyContext } from './app/server';
import { startStandaloneServer } from '@apollo/server/standalone';

export const server = new ApolloServer<MyContext>({
  typeDefs: typeDefsFederated,
  resolvers,
});

startStandaloneServer(server, {
  context: async ({ req }) => ({
    token: req.headers.token,
    dataSources,
  }),
  listen: { port: 4000 },
}).then(({ url }) => console.log(`🚀  Server ready at: ${url}`));
