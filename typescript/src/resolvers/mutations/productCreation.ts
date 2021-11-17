import { addProduct } from '../../dataSource/products';
import { ProductInput } from '../../models/ProductReference';
import { ProductCreationError } from '../../app/errors';

export async function createProduct(product: ProductInput) {
    if (product.name === 'business') throw new ProductCreationError(product.name);

    const newId = Math.floor(Math.random() * 100);
    addProduct({ ...product, id: newId });
    return { result: 'success' };
}
