import { vehicle } from '../../resolvers/vehicle/rim/vehicle';
import { vehiclesDb } from '../../dataSource/vehicles';

describe('rim.vehicle', () => {

  it('resolves from id', () => {
    const resolvedVehicle = vehicle({ id: 'r01'})
    expect(resolvedVehicle).toMatchObject({ name: 'mono-cycle'})
  })

  it('resolves from vehicle', () => {
    const resolvedVehicle = vehicle({ id: 'r01', vehicle: vehiclesDb[0]})
    expect(resolvedVehicle).toMatchObject({ name: 'mono-cycle'})
  })
})
