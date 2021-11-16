import { Book } from "../../../models/BookType";

export interface AddBookInput {
    title: string;
    authorName: string;
}

export interface AddBookPayload {
    book?: Book;
    userError?: AddBookError[];
}

export interface AddBookError {
    message?: string;
    field?: string[];
}
