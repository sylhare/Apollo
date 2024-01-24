export interface Book {
  id: string;
  category: BookCategory;
  title: string;
  author: string;
  editor: EditorReference
}

export interface EditorReference {
  id: string;
}

export interface Page {
  number: number;
  content: string;
  bookId: string;
}

export enum BookCategory {
  Fiction = 'FICTION',
  Biography = 'BIOGRAPHY',
  Poetry = 'POETRY',
  History = 'HISTORY',
  Education = 'EDUCATION',
}

export const books: Book[] = [
  { id: '1',
    title: 'The Awakening',
    author: 'Kate Chopin',
    category: BookCategory.Fiction,
    editor: { id: 'one' } },
  { id: '2',
    title: 'City of Glass',
    author: 'Paul Auster',
    category: BookCategory.Biography,
    editor: { id: 'two' } },
];

// Mock database results
export const pages: { bookId: string, pages: Page[] }[] = [
  {
    bookId: '1',
    pages: [
      { number: 1, content: 'page 1', bookId: '1' },
      { number: 2, content: 'page 2', bookId: '1' },
      { number: 3, content: 'page 3', bookId: '1' },
      { number: 4, content: 'page 4', bookId: '1' },
    ]
  },
  {
    bookId: '2',
    pages: [
      { number: 1, content: 'Beginning', bookId: '2' },
      { number: 2, content: 'End', bookId: '2' },
    ]
  }
]
