import { Vehicle } from '../../models/Vehicle';

export async function rims(parent: Vehicle): Promise<any> {
  console.log(`vehicle.rims - parent:${parent.id}, rims:${!!parent.tires}`)
  return parent.rims.map(rim => ({ ...rim, vehicle: parent }));
}
