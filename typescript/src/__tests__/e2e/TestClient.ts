import { FetchResult } from 'apollo-link';
import { fetch } from 'apollo-server-env';
import {
    ApolloClient,
    ApolloQueryResult,
    createHttpLink,
    InMemoryCache,
    MutationOptions,
    NormalizedCacheObject,
    OperationVariables,
    QueryOptions,
} from '@apollo/client/core';

export class TestClient extends ApolloClient<NormalizedCacheObject> {
    constructor(url: URL, httpFetch: typeof fetch = fetch) {
        super({
            cache: new InMemoryCache(),
            link: createHttpLink({
                uri: url.toString(),
                fetch: httpFetch as any,
                headers: { 'Example': 'hello world' },
            }),
        });
    }

    query<T = any, TVariables = OperationVariables>(options: QueryOptions<TVariables>): Promise<ApolloQueryResult<T>> {
        return super.query(options)
            .then(result => result)
            .catch(error => Promise.reject(extractMessageFrom(error)));
    }

    mutate<T = any, TVariables = OperationVariables>(options: MutationOptions<T, TVariables>): Promise<FetchResult<T>> {
        return super.mutate(options)
            .then(result => result)
            .catch(error => Promise.reject(extractMessageFrom(error)));
    }
}

function extractMessageFrom(error: any): any {
    const errors = error.networkError?.result?.errors;
    return errors ? errors.map((e: any) => e.message).join('\n') : error?.message;
}
