import {ExampleProduct, randomProduct} from "../models/ExampleProduct";
import { Product } from "../models/DataTypes";

export let products: Product[] = [new ExampleProduct(303), randomProduct(), randomProduct()];

export function addProduct(product: Product) {
    products = products.concat(product)
}
