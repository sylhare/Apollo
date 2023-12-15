import { readFileSync } from 'fs';
import path from 'path';

export const typeDefs = readFileSync(path.join(__dirname, 'schema.graphql'), { encoding: 'utf-8' });
export const typeDefsFederated = readFileSync(path.join(__dirname, 'schema.federation.graphql'), { encoding: 'utf-8' });
