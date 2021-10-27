import { ApolloError } from "apollo-server-express";

export class UserError {
    public readonly message: string;
    public readonly path: string[];
    public readonly __typename: string;

    constructor(message: string, path: string[] = []) {
        this.message = message;
        this.path = path;
        this.__typename = this.constructor.name;
    }
}

export class ProductCreationError extends ApolloError {
    constructor(name: string) {
        super(`Can not create product ${name}`);
    }
}

export class InvalidNameError extends UserError {
    constructor(name: String, path: string[]) {
        super(`Invalid name ${name} was provided`, path);
    }
}

export class NameTooLongError extends UserError {
    constructor(path: string[]) {
        super(`Name too long error`, path);
    }
}
