import { Product, randomProduct } from "../../models/Product";

describe("Product Class", () => {

    test("Description", () => {
        const p = new Product({ id: 1, name: 'name' });
        const p2 = new Product({ id: 1, name: 'name', description: 'Description' });
        expect(p).toEqual(p2);
    })

    test("Random", () => {
        expect(randomProduct()).not.toEqual(randomProduct());
    })

    test("default", () => {
        expect(new Product().id).toEqual(0);
    })
})
