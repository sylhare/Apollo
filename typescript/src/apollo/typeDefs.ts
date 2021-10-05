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


function schemaFrom(schema: string) {
    return gql(readFileSync(path.join(process.cwd(), 'src', 'resources', schema), 'utf8'));
}

// Define multiple graphQL schema with files
export const ServiceTypeDefs = [schemaFrom('schema.graphql'), schemaFrom('other.graphql')];
