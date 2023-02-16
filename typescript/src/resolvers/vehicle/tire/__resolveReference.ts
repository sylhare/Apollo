import { Tire, Vehicle } from '../../../models/Vehicle';
import { vehiclesDb } from '../../../dataSource/vehicles';

type TireFederatedReference = {
  id: string;
  vehicle: { id: string };
}
export function __resolveReference({ id, vehicle }: TireFederatedReference): Tire | undefined {
  console.log(`tire resolve reference ${id}`);
  return vehiclesDb.find(v => v.id === vehicle.id)?.tires.find(tire => tire.id === id);
}
