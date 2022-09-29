import { Vehicle } from '../../../models/Vehicle';
import { vehiclesDb } from '../../../dataSource/vehicles';

type RimReference = { id: string, vehicle?: Vehicle }

export function vehicle(parent: RimReference): Vehicle | undefined {
  console.log(`tire.vehicle - vehicle:${parent?.id}, tire:${parent.id}`)
  if (parent.vehicle) return parent.vehicle;
  return vehiclesDb.find(vehicle => vehicle.rims.find(rim => rim.id === parent.id))
}
