import { makeExecutableSchema } from "graphql-tools";
import { ServiceTypeDefs } from "./service/typeDefs";
import ServiceResolvers from "./service/resolver";

export const serviceSchema = makeExecutableSchema({
    typeDefs: ServiceTypeDefs,
    resolvers: ServiceResolvers,
});
