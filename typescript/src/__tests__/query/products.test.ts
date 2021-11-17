import { graphql } from 'graphql';
import { serviceSchema } from '../../app/schemas';
import { ProductReference } from '../../models/ProductReference';

describe('Products Queries', () => {
    test('Get products', async () => {
        const query = `
            query AllProducts {
                products {
                    id
                    name
                }
            }        
        `;
        return graphql(serviceSchema, query).then((result: any) => {
            const receivedProducts: ProductReference[] = result.data.products;
            expect(receivedProducts.length).toBeTruthy();
            expect(receivedProducts).toMatchObject([
                { id: 303, name: 'Product' },
                { id: expect.any(Number), name: expect.any(String) },
                { id: 1, name: 'Product' },
                { id: expect.any(Number), name: expect.any(String) }
            ]);
        });
    });

    test('Get one product', async () => {
        const query = `
            query Product {
                product(id: 1) {
                    id
                    name
                }
            }        
        `;
        return graphql(serviceSchema, query).then((result: any) => {
            const receivedProduct: ProductReference = result.data.product;
            expect(receivedProduct.id).toBe(1);
            expect(receivedProduct.name).toBe('Product');
        });
    });
});
