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

    findAndUpdate(id: Number, updatedProduct: Partial<Product>): Product | undefined {
        let changedProduct = undefined
        products.map(product => {
            if (product.id === id) {
                if (updatedProduct.name) product.name = updatedProduct.name;
                if (updatedProduct.description) product.description = updatedProduct.description;
                changedProduct = product
            }
            return product
        })
        return changedProduct
    }
}

export let products: ProductReference[] = new ProductDataSource().inMemoryCache
