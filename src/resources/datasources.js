const authors = [
    {
        name: 'Paul Auster',
        books: ['City of Glass', 'Moon Palace']
    },
    {
        name: 'Kate Chopin',
        books: ['The Awakening'],
    }
]

const books = [
    {
        title: 'The Awakening',
        author: authors[1],
    },
    {
        title: 'City of Glass',
        author: authors[0],
    },
];

module.exports = { authors, books}
