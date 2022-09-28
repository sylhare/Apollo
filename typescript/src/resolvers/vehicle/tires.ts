import { Tire, Vehicle } from '../../models/Vehicle';

export async function tires(parent: Vehicle): Promise<Tire[]> {
  console.log(`vehicle.tires - parent:${parent.id}, tires:${!!parent.tires}`)
  return parent.tires.map(tire => ({ ...tire, vehicle: parent }));
}
