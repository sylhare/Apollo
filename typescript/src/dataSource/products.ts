import { Product, randomProduct } from '../models/Product';
import { ProductReference } from '../models/ProductReference';

export let products: ProductReference[] = [
    new Product({ id: 303 }),
    randomProduct(),
    new Product({ id: 1 }),
    randomProduct()
];

export function addProduct(product: ProductReference) {
    products = products.concat(product);
}
