import {ProductImpl, randomProduct} from "../models/ProductImpl";
import { Product } from "../models/DataTypes";

export let products: Product[] = [new ProductImpl(303), randomProduct(), randomProduct()];

export function addProduct(product: Product) {
    products = products.concat(product)
}
