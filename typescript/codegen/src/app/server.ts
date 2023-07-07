import { GraphQLBook } from '../__generated__/resolvers-types';
import { ApolloServer } from '@apollo/server';
import { resolvers } from './resolvers';
import { typeDefs } from '../graphql/typeDefs';

interface MyDataSources {
  books: GraphQLBook[];
}

export const dataSources: MyDataSources = {
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

export interface MyContext {
  token?: string;
  dataSources?: MyDataSources
}

export const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
});
