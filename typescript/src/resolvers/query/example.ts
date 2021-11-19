// Resolver for query example
import Example from '../../models/Example'

export async function example(_: any, args: any): Promise<Example> {
    return new Example('user-example-1', '1')
}
