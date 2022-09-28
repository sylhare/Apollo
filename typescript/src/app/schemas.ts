import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from './typeDefs'
import resolvers from '../resolvers'

export const serviceSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
})
