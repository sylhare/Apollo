import { AppContext } from '../../../dataSource';
import { Product } from '../../../models/Product';

export async function setProductDescription(
  parent: null,
  { id, description }: { id: Number, description: string },
  { dataSources }: AppContext
): Promise<Product | undefined> {
  return dataSources.products.findAndUpdate(id, { description });
}
