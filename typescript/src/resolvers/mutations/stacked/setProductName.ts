import { AppContext } from '../../../dataSource';
import { Product } from '../../../models/Product';

export async function setProductName(
  parent: null,
  { id, name }: { id: Number, name: string },
  { dataSources }: AppContext
): Promise<Product | undefined> {
  return dataSources.products.findAndUpdate(id, { name });
}
