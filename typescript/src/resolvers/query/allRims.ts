import { Rim } from '../../models/Vehicle';
import { vehiclesDb } from '../../dataSource/vehicles';

export async function allRims(): Promise<Rim[]> {
  console.log('allRims');
  return vehiclesDb.flatMap(vehicle => vehicle.rims);
}
