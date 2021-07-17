import {ExampleProduct, randomProduct} from "../../models/ExampleProduct";

describe("Product Class", () => {

    test("Description", () => {
        const p = new ExampleProduct(1, "name", null)
        const p2 = new ExampleProduct(1, "name")
        expect(p).toEqual(p2);
    })

    test("Random", () => {
        expect(randomProduct()).not.toEqual(randomProduct());
    })
})
