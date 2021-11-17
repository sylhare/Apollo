import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';
import { readdirSync, readFileSync, statSync } from 'fs';
import { join } from 'path';

function listFiles(directory: string): string[] {
    return readdirSync(directory)
        .map(name => join(directory, name))
        .flatMap(path => statSync(path).isDirectory() ? listFiles(path) : [path]);
}

function getTypeDefs(filename: string): DocumentNode {
    return gql(readFileSync(filename, 'utf8'));
}

// Define multiple graphQL schema with files
export const typeDefs = listFiles(join(process.cwd(), 'src', 'resources', 'graphql')).map(getTypeDefs);
