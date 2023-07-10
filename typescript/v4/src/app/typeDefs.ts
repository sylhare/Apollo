import { gql } from 'graphql-tag'
import { readdirSync, readFileSync, statSync } from 'fs'
import { join } from 'path'

function listFiles(directory: string): string[] {
  return readdirSync(directory)
    .map(name => join(directory, name))
    .flatMap(path => statSync(path).isDirectory() ? listFiles(path) : [path])
}

export const typeDefs = listFiles(join(process.cwd(), 'src', 'resources', 'graphql'))
  .map(filename => gql(readFileSync(filename, 'utf8')))
