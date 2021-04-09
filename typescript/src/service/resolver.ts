import {ApolloError} from "apollo-server-express";

const ServiceResolvers = {
    Query: {
        getAllUsers: async (_: any, args: any) => {
            try {
                return [{name: "xyz"}, {name: "abc"}];
            } catch (error) {
                throw new ApolloError(error);
            }
        },
    },
};

export default ServiceResolvers;
