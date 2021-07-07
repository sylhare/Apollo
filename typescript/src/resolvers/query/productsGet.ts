import { products } from "../../dataSource/products";
import { Product, ProductId } from "../../models/DataTypes";


export function getProducts(): Promise<Product[]> {
    return Promise.resolve(products);
}

// ProductInput is the same as { productId: number }
export function getProductById({ productId }: ProductId): Promise<Product | undefined> {
    return Promise.resolve(products.find(p => p.id === productId));
}
