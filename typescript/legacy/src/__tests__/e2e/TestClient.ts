import { fetch } from 'apollo-server-env'
import {
  ApolloClient,
  ApolloQueryResult,
  createHttpLink,
  FetchResult,
  InMemoryCache,
  MutationOptions,
  NormalizedCacheObject,
  OperationVariables,
  QueryOptions,
} from '@apollo/client/core'
import { MovieClient } from './MovieClient'
import { DefaultContext } from '@apollo/client/core/types';
import { ApolloCache } from '@apollo/client/cache';

export class TestClient extends ApolloClient<NormalizedCacheObject> {
  readonly movie: MovieClient = new MovieClient(this)

  constructor(url: URL, httpFetch: typeof fetch = fetch) {
    super({
      cache: new InMemoryCache(),
      link: createHttpLink({
        uri: url.toString(),
        fetch: httpFetch as any,
        headers: { 'Example': 'hello world' },
      }),
      defaultOptions: {
        mutate: {
          fetchPolicy: 'no-cache',
        },
        query: {
          fetchPolicy: 'no-cache',
        },
        watchQuery: {
          fetchPolicy: 'no-cache',
          nextFetchPolicy: 'no-cache',
        },
      },
    })
  }

  query<T = any, TVariables extends OperationVariables = OperationVariables>(options: QueryOptions<TVariables>): Promise<ApolloQueryResult<T>> {
    return super.query(options)
      .then(result => result)
      .catch(error => Promise.reject(extractMessageFrom(error)))
  }

  mutate<TData = any, TVariables extends OperationVariables = OperationVariables, TContext extends Record<string, any> = DefaultContext, TCache extends ApolloCache<any> = ApolloCache<any>>(options: MutationOptions<TData, TVariables, TContext>): Promise<FetchResult<TData>> {
    return super.mutate(options)
      .then(result => result)
      .catch(error => Promise.reject(extractMessageFrom(error)))
  }
}

function extractMessageFrom(error: any): any {
  const errors = error.networkError?.result?.errors
  return errors ? errors.map((e: any) => e.message).join('\n') : error?.message
}
