import { addProduct } from "../../dataSource/products";
import { ProductInput } from "../../models/DataTypes";

export function createProduct(product: ProductInput) {
    const newId = Math.floor(Math.random() * 100)
    addProduct({ ...product, id: newId })
    return Promise.resolve('success')
}
