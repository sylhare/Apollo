import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from './typeDefs'
import resolvers from './resolver'

export const serviceSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
})
