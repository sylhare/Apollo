import { gql } from "apollo-server-express";
import {readFileSync} from "fs";
import path from "path";

export const ServiceTypeDefs = gql`
  type User {
    name: String
  }
  type Query {
    getAllUsers: [User]
  }
`;

// export const exampleTypeDefs = gql(readFileSync(path.join(__dirname, '../../resources/schema.graphql'), 'utf8'));
