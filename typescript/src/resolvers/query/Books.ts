import { retrieveBooks } from "../../dataSource/books";
import { Book } from "../../models/BookType";


export function getAllBooks(): Promise<Book[]> {
    return Promise.resolve(retrieveBooks());
}

