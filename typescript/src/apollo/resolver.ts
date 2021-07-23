import { ApolloError } from "apollo-server-express";
import { example } from "../resolvers/query/example";
import { getProductById, getProducts } from "../resolvers/query/productQueries";
import { createProduct } from "../resolvers/mutations/productCreation";
import { ProductInput } from "../models/ProductType";

const ServiceResolvers = {
    Query: {
        getAllUsers: async (_: any, args: any) => {
            try {
                return [{ name: "xyz" }, { name: "abc" }];
            } catch (error) {
                throw new ApolloError(error);
            }
        },
        products: async () => getProducts,
        product: async (_: any, { id }: { id: number }) => getProductById({ productId: id }),
        example
    },
    Mutation: {
        createProduct: async (_: any, { product }: { product: ProductInput }) => createProduct(product)
    }
};

export default ServiceResolvers;
