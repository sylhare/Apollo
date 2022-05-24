import { retrieveBook, retrieveBooks } from '../../dataSource/books'
import { Book } from '../../models/BookType'

export function getAllBooks(): Promise<Book[]> {
    console.log('getAllBooks')
    return Promise.resolve(retrieveBooks())
}

export function getBook(title: string): Promise<Book | null> {
    console.log(`getBook ${title}`)
    return Promise.resolve(retrieveBook(title))
}

export function lotr(): Promise<Book> {
    return Promise.resolve({ title: 'The lord of the rings', author: { name: 'J.R.R. Tolkien' } })
}
