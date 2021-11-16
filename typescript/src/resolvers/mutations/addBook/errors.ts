import { AddBookError } from "./interfaces";

class CustomUserError implements AddBookError {
    private __typename: string;

    constructor(readonly message: string, readonly field: string[]) {
        this.message = message;
        this.field = field;
        this.__typename = this.constructor.name;
    }
}


export class InvalidBookTitle extends CustomUserError {
    constructor() {
        super("Invalid book title", ["input", "title"]);
    }
}

export class InvalidAuthorName extends CustomUserError {
    constructor() {
        super("Invalid author name", ["input", "authorName"]);
    }
}
