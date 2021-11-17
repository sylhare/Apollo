import { retrieveBook, retrieveBooks } from '../../dataSource/books';
import { Book } from '../../models/BookType';

export function getAllBooks(): Promise<Book[]> {
    return Promise.resolve(retrieveBooks());
}

export function getBook(title: string): Promise<Book | null> {
    return Promise.resolve(retrieveBook(title));
}

export function lotr(): Promise<Book> {
    return Promise.resolve({ title: 'The lord of the rings', author: { name: 'J.R.R. Tolkien' } });
}
