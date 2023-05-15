import { GraphQLBook } from '../__generated__/resolvers-types';
import { ApolloServer } from '@apollo/server';
import { readFileSync } from 'fs';
import { resolvers } from './resolvers';

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

const typeDefs = readFileSync('./../schema.graphql', { encoding: 'utf-8' });

export const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
});
