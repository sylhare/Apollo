import { buildSubgraphSchema } from '@apollo/federation';
import { typeDefs } from './typeDefs'
import resolvers from '../resolvers'

// export const serviceSchema = makeExecutableSchema({ // without federation
export const serviceSchema = buildSubgraphSchema({
    typeDefs,
    resolvers,
})
