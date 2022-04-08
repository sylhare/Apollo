// Resolver for query example
import Example from '../../models/Example'
import { fieldsList, fieldsMap } from "graphql-fields-list";
import { GraphQLResolveInfo } from 'graphql';
import { AppContext } from "../../dataSource";

export async function example(parent: any, args: Record<string, any>, context: AppContext, info: GraphQLResolveInfo): Promise<Example> {
    console.log(`Parent in the resolver chain: ${JSON.stringify(parent)}`)
    console.log(`Arguments of the query: ${JSON.stringify(args)}`)
    console.log(`Apollo Server's context of current request: ${JSON.stringify(context)}`)
    console.log(`Advanced GraphQL information about request: ${JSON.stringify(info)}`)
    console.log(`${JSON.stringify(fieldsList(info))}`)
    console.log(`${JSON.stringify(fieldsMap(info, { path: 'user', skip: ['__typename'] }))}`)

    return new Example('user-example-1', '1')
}
