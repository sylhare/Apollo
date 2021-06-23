import {ApolloError} from "apollo-server-express";
import {example} from "../resolvers/query/example";

const ServiceResolvers = {
    Query: {
        getAllUsers: async (_: any, args: any) => {
            try {
                return [{name: "xyz"}, {name: "abc"}];
            } catch (error) {
                throw new ApolloError(error);
            }
        },
        example
    },
};

export default ServiceResolvers;
