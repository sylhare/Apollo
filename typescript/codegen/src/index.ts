import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';

interface MyContext {
    token?: String;
}

const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];

const resolvers = {
    Query: {
        books: () => books,
    },
    Mutation: {
        addBook: (_: any, { title, author }: { title: string, author: string }) => (
          { code: 'success', success: true, message: 'msg', book: { title, author } }
        ),
    }
};

const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' });
const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
