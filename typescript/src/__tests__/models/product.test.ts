import { Product, randomProduct } from "../../models/Product";

describe("Product Class", () => {

    test("Description", () => {
        const p = new Product(1, "name", null)
        const p2 = new Product(1, "name")
        expect(p).toEqual(p2);
    })

    test("Random", () => {
        expect(randomProduct()).not.toEqual(randomProduct());
    })
})
