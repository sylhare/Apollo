import { makeExecutableSchema } from "graphql-tools";
import { ServiceTypeDefs } from "./typeDefs";
import ServiceResolvers from "./resolver";

export const serviceSchema = makeExecutableSchema({
    typeDefs: ServiceTypeDefs,
    resolvers: ServiceResolvers,
});
