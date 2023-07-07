import { startStandaloneServer } from '@apollo/server/standalone';
import { dataSources, server } from './app/server';

startStandaloneServer(server, {
  context: async ({ req }) => ({
    token: req.headers.token,
    dataSources,
  }),
  listen: { port: 4000 },
}).then(({ url }) => console.log(`🚀  Server ready at: ${url}`));
