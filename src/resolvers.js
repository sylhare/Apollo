const { pubsub, BOOK_ADDED } = require("./subscription");
const { authors } = require("./resources/datasources");
const { books } = require("./resources/datasources");

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
            await pubsub.publish(BOOK_ADDED, { bookAdded: createdBook })
            return createdBook ? createdBook : null;
        }
    },
    Subscription: {
        bookAdded: {
            subscribe: () => pubsub.asyncIterator([BOOK_ADDED]),
        },
    },
};

module.exports = { resolvers }
