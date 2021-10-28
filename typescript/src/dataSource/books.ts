import { Book } from "../models/BookType";

const books: Book[] = [
    {
        title: 'Book 1',
        author: {
            name: 'Author 1'
        }
    },
    {
        title: 'The legend of Saturna',
        author: {
            name: 'Gol Hansworth'
        },
    },
    {
        title: 'Merit City: Last wonder',
        author: {
            name: 'Levine Vladiwoskovitch'
        },
    },
    {
        title: 'Atlanta',
        author: {
            name: 'Don Ross'
        }
    },
    {
        title: 'Demonicon',
        author: {
            name: null
        }
    }
];

export function retrieveBooks(): Book[] {
    return books
}

export function retrieveBook(title: string): Book | null {
    return books.find(book => book.title === title) ?? null
}
