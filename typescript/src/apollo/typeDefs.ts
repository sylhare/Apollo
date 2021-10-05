import { gql } from "apollo-server-express";
import { readFileSync } from "fs";
import path from "path";

// Define directly the graphql schema
// export const ServiceTypeDefs = gql`
//   type User {
//     name: String
//   }
//   type Query {
//     getAllUsers: [User]
//   }
// `;

// Define multiple graphQL schema with file or directly
export const ServiceTypeDefs = gql`
    
    type MixedUpExample {
        value: String
    }
    
    ${readFileSync(path.join(__dirname, '../resources/schema.graphql'), 'utf8')}
    ${readFileSync(path.join(__dirname, '../resources/book.graphql'), 'utf8')}
`;
