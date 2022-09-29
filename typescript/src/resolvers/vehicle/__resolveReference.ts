import { Rim, Vehicle } from '../../models/Vehicle';
import { vehiclesDb } from '../../dataSource/vehicles';

type VehicleReference = {
  id: string
}
export function __resolveReference({ id }: VehicleReference): Vehicle | undefined {
  console.log(`vehicle resolve reference ${id}`);
  return vehiclesDb.find(vehicle => vehicle.id === id);
}
