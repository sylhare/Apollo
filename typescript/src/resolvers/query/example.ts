// Resolver for query example
import Example from '../../models/Example'

export async function example(parent: any, args: any, context: any, info: any): Promise<Example> {
    console.log(`Parent in the resolver chain: ${JSON.stringify(parent)}`)
    console.log(`Arguments of the query: ${JSON.stringify(args)}`)
    console.log(`Apollo Server's context of current request: ${JSON.stringify(context)}`)
    console.log(`Advanced GraphQL information about request: ${JSON.stringify(info)}`)

    return new Example('user-example-1', '1')
}
