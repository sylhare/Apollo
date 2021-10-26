import {
    createTestClient,
    ApolloServerTestClient,
} from 'apollo-server-testing'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from "../../apollo/typeDefs";
import resolvers from "../../apollo/resolver";

export default function testServer(
    dataSources: any
): ApolloServerTestClient {
    return createTestClient(
        new ApolloServer({ typeDefs, resolvers, dataSources })
    )
}
