const { readFileSync } = require("fs");
const path = require("path");

const { gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql(readFileSync(path.join(__dirname, './resources/book.graphql'), 'utf8'));

module.exports = { typeDefs }
