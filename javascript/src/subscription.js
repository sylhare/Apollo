const { PubSub } = require('apollo-server')

/**
 * The PubSub class is not recommended for production environments,
 * because it's an in-memory event system that only supports a single server instance.
 */
const pubsub = new PubSub()

const BOOK_ADDED = 'BOOK_ADDED'

module.exports = { pubsub, BOOK_ADDED };
