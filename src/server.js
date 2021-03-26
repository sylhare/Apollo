const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
    # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

    # This "Book" type defines the queryable fields for every book in our data source.
    type Book {
        title: String
        author: Author
    }

    type Author {
        name: String
        books: [Book]
    }

    # The "Query" type is special: it lists all of the available queries that
    # clients can execute, along with the return type for each. In this
    # case, the "books" query returns an array of zero or more Books (defined above).
    type Query {
        books: [Book]
        authors: [Author]
    }

    # The "Mutation" type is similar in structure and purpose to the Query type.
    # The Mutation type defines entry points for write operations.
    type Mutation {
        addBook(title: String, author: String): Book
    }
`;

// Data set
// Here we define the data, but it can be fetched from a db or another API
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

async function createBook(title, author) {
    return { title: title, author: { name: author } }
}

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        books: () => books,
        authors: () => authors
    },
    Mutation: {
        addBook: async (_, { title, author }) => {
            console.log("Create book " + title + " from " + author)
            const createdBook = await createBook(title, author)
            return createdBook ? createdBook : null;
        }
    }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

module.exports = { server };
