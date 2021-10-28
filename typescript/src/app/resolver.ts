import { ProductInput } from "../models/ProductReference";
import { createProduct } from "../resolvers/mutations/productCreation";
import { getProductById, getProducts } from "../resolvers/query/productQueries";
import { getAllBooks, getBook, lotr } from "../resolvers/query/Books";
import { example } from "../resolvers/query/example";
import { exampleMutation } from "../resolvers/mutations/exampleMutation";

const resolvers = {
    Query: {
        getAllUsers: async (_: any, args: any) => ([{ name: "xyz" }, { name: "abc" }]),
        example,
        products: async () => getProducts(),
        product: async (_: any, { id }: { id: number }) => getProductById({ productId: id }),
        allBooks: async () => getAllBooks(),
        book: async (parent: any, { title }: { title: string }) => getBook(title),
        lotr: async () => lotr()
    },
    Mutation: {
        createProduct: async (_: any, { product }: { product: ProductInput }) => createProduct(product),
        exampleMutation
    }
};

export default resolvers;
