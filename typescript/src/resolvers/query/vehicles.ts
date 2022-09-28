import { vehiclesDb } from '../../dataSource/vehicles';
import { Vehicle } from '../../models/Vehicle';

export async function vehicles(): Promise<Vehicle[]> {
  console.log('vehicles');
  return vehiclesDb;
}
