import { MoviesDataSource, MoviesRESTDatasource } from './moviesDatasource';
import { IncomingMessage } from 'http';
import { ApolloServer } from '@apollo/server';
import { KeyValueCache } from '@apollo/utils.keyvaluecache';

export interface Context {
  token: string;
  logger: any;
  cache: KeyValueCache;
  dataSources: DataSources
}

export interface DataSources {
  movies: MoviesDataSource
}

class AppContext implements Context {
  public token: string;
  public logger: any;
  public cache: KeyValueCache;
  public dataSources: DataSources;

  constructor({ req, server }: { req: IncomingMessage; server: ApolloServer<Context> }) {
    this.token = this.getTokenFromRequest(req);
    this.cache = server.cache;
    this.dataSources = {
      movies: new MoviesRESTDatasource(this),
    };
  }

  getTokenFromRequest(req: IncomingMessage): string {
    return req['headers']['token'] as string;
  }
}
