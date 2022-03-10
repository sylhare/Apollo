import { Product, randomProduct } from '../models/Product'
import { ProductReference } from '../models/ProductReference'
import { DataSource } from './index';

export class ProductDataSource implements DataSource {
    inMemoryCache: ProductReference[] = [
        new Product({ id: 303 }),
        randomProduct(),
        new Product({ id: 1 }),
        randomProduct()
    ]

    add(product: ProductReference) {
        this.inMemoryCache = products.concat(product)
    }
}

export let products: ProductReference[] = new ProductDataSource().inMemoryCache
