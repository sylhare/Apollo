import { ApolloError } from "apollo-server-express";
import { ProductInput } from "../models/ProductType";
import { createProduct } from "../resolvers/mutations/productCreation";
import { getProductById, getProducts } from "../resolvers/query/productQueries";
import { getAllBooks, getBook } from "../resolvers/query/Books";
import { example } from "../resolvers/query/example";

const resolvers = {
    Query: {
        getAllUsers: async (_: any, args: any) => {
            try {
                return [{ name: "xyz" }, { name: "abc" }];
            } catch (error) {
                throw new ApolloError("getAllUsers did not work");
            }
        },
        products: async () => getProducts(),
        product: async (_: any, { id }: { id: number }) => getProductById({ productId: id }),
        example,
        allBooks: async () => getAllBooks(),
        book: async(parent: any, { title }: { title: string }) => getBook(title)
    },
    Mutation: {
        createProduct: async (_: any, { product }: { product: ProductInput }) => createProduct(product)
    }
};

export default resolvers;
