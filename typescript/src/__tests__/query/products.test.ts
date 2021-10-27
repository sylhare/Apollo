import { graphql } from "graphql";
import { serviceSchema } from "../../app/schemas";
import { Product } from "../../models/ProductType";

describe("Products Queries", () => {
    test("Get products", async () => {
        const query = `
            query AllProducts {
                products {
                    id
                    name
                }
            }        
        `;
        return graphql(serviceSchema, query).then((result: any) => {
            const receivedProducts: Product[] = result.data.products;
            expect(receivedProducts.length).toBeTruthy()
            expect(receivedProducts).toMatchObject([
                { id: 303, name: "Product 303" },
                { id: expect.any(Number), name: expect.any(String) },
                { id: 1, name: "Product 1" },
                { id: expect.any(Number), name: expect.any(String) }
            ])
        });
    });

    test("Get one product", async () => {
        const query = `
            query Product {
                product(id: 1) {
                    id
                    name
                }
            }        
        `;
        return graphql(serviceSchema, query).then((result: any) => {
            const receivedProduct: Product = result.data.product;
            expect(receivedProduct.id).toBe(1)
            expect(receivedProduct.name).toBe("Product 1")
        });
    });
});
