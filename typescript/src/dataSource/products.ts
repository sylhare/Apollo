import { ExampleProduct, randomProduct } from "../models/ExampleProduct";
import { Product } from "../models/ProductType";

export let products: Product[] = [
    new ExampleProduct(303),
    randomProduct(),
    new ExampleProduct(1),
    randomProduct()
];

export function addProduct(product: Product) {
    products = products.concat(product)
}
