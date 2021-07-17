import {ProductImpl, randomProduct} from "../models/ProductImpl";

describe("Product Class", () => {

    test("Description", () => {
        const p = new ProductImpl(1, "name", null)
        const p2 = new ProductImpl(1, "name")
        expect(p).toEqual(p2);
    })

    test("Random", () => {
        expect(randomProduct()).not.toEqual(randomProduct());
    })
})
