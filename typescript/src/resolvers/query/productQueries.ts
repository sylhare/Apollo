import { products } from '../../dataSource/products';
import { ProductId, ProductReference } from '../../models/ProductReference';

export function getProducts(): Promise<ProductReference[]> {
    return Promise.resolve(products);
}

// ProductInput is the same as { productId: number }
export function getProductById({ productId }: ProductId): Promise<ProductReference | undefined> {
    return Promise.resolve(products.find(p => p.id === productId));
}
