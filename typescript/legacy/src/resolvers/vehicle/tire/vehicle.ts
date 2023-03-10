import { Vehicle } from '../../../models/Vehicle';
import { vehiclesDb } from '../../../dataSource/vehicles';

type TireReference = { id: string, vehicle?: Vehicle }

export function vehicle(parent: TireReference): Vehicle | undefined {
  console.log(`tire.vehicle - vehicle:${parent?.id}, rim:${parent.id}`)
  if (parent.vehicle) return parent.vehicle;
  return vehiclesDb.find(vehicle => vehicle.tires.find(tire => tire.id === parent.id));
}
