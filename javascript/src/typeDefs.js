const { gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`

    # This "Book" type defines the queryable fields for every book in our data source.
    type Book {
        title: String
        author: Author
    }

    type Author {
        name: String
        books: [Book]
    }

    type Cheeky {
        message: String
    }

    # The "Query" type is special: it lists all of the available queries that
    # clients can execute, along with the return type for each. In this
    # case, the "books" query returns an array of zero or more Books (defined above).
    type Query {
        books: [Book]
        authors: [Author]
        cheeky(message: String!): Cheeky
        ping(message: String!): String
    }

    # The "Mutation" type is similar in structure and purpose to the Query type.
    # The Mutation type defines entry points for write operations.
    type Mutation {
        addBook(title: String, author: String): Book
    }

    type Subscription {
        bookAdded: Book
    }
`;

module.exports = { typeDefs }
