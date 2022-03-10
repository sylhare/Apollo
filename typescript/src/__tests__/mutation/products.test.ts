import { graphql } from 'graphql'
import { serviceSchema } from '../../app/schemas'
import { ProductCreationError } from '../../app/errors'

describe('Products Mutation', () => {
    const CREATE_PRODUCT = `
            mutation {
                productCreation(product: { name: "Product", description: "description" }) {
                    result
                }
            }        
        `
    const CREATE_ERROR_PRODUCT = `
            mutation {
                productCreation(product: { name: "business", description: "description" }) {
                    result
                }
            }        
        `
    test('Create Product', async () =>
        graphql(serviceSchema, CREATE_PRODUCT).then((result: any) => expect(result.data.productCreation)
            .toMatchObject({ result: 'success' })
        ))

    test('Create Product', async () =>
        expect(graphql(serviceSchema, CREATE_ERROR_PRODUCT)).resolves.toMatchObject({
            data: { productCreation: null },
            errors: [new ProductCreationError('business')]
        })
    )
})
