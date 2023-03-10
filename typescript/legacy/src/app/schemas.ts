import { buildFederatedSchema } from '@apollo/federation';
import { typeDefs } from './typeDefs'
import resolvers from '../resolvers'

// export const serviceSchema = makeExecutableSchema({ // without federation
export const serviceSchema = buildFederatedSchema({
    typeDefs,
    resolvers,
})
