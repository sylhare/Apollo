import { makeExecutableSchema } from 'graphql-tools'
import { typeDefs } from './typeDefs'
import resolvers from './resolver'

export const serviceSchema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers,
})
