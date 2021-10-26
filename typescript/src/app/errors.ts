import { ApolloError } from "apollo-server-express";

export class ProductCreationError extends ApolloError {
    constructor(name: string) {
        super(`Can not create product ${name}`);
    }
}
