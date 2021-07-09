const { ApolloServer, gql } = require('apollo-server');
const { readFileSync } = require("fs");
const path = require("path");

const typeDefs = gql(readFileSync(path.join(__dirname, './schema.graphql'), 'utf8'));
const resolvers = {Query: {}};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
