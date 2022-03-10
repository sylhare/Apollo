import { ProductInput } from '../../../models/ProductReference';
import { AppContext } from '../../../dataSource';
import { Product } from '../../../models/Product';

export async function createProduct(
  parent: null,
  { input }: { input: ProductInput },
  { dataSources }: AppContext
): Promise<Product> {
  const product = new Product({ id: Math.floor(Math.random() * 100), ...input })
  dataSources.products.add(product);
  return product;
}
