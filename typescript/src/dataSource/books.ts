import { Book } from "../models/BookType";

const books: Book[] = [
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
            name: 'Don ross'
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
