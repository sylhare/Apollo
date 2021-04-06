const { resolvers } = require("./resolvers");
const { typeDefs } = require("./typeDefs");
const { ApolloServer } = require('apollo-server');

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    subscriptions: {
        path: '/subscriptions',
        onConnect: (connectionParams, webSocket, context) => {
            console.log('Connected!')
        },
        onDisconnect: (webSocket, context) => {
            console.log('Disconnected!')
        },
    },
    typeDefs,
    resolvers
});

module.exports = { server };
