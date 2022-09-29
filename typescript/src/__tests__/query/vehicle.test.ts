import { vehicle as rimVehicle} from '../../resolvers/vehicle/rim/vehicle';
import { vehicle as tireVehicle} from '../../resolvers/vehicle/tire/vehicle';
import { vehiclesDb } from '../../dataSource/vehicles';

describe('vehicle', () => {

  describe('rim.vehicle', () => {
    it('resolves from id', () => {
      const resolvedVehicle = rimVehicle({ id: 'r01' })
      expect(resolvedVehicle).toMatchObject({ name: 'mono-cycle' })
    })

    it('resolves from vehicle', () => {
      const resolvedVehicle = rimVehicle({ id: 'r01', vehicle: vehiclesDb[0] })
      expect(resolvedVehicle).toMatchObject({ name: 'mono-cycle' })
    })
  })

  describe('tire.vehicle', () => {
    it('resolves from id', () => {
      const resolvedVehicle = tireVehicle({ id: 't01' })
      expect(resolvedVehicle).toMatchObject({ name: 'mono-cycle' })
    })

    it('resolves from vehicle', () => {
      const resolvedVehicle = tireVehicle({ id: 't01', vehicle: vehiclesDb[0] })
      expect(resolvedVehicle).toMatchObject({ name: 'mono-cycle' })
    })
  })
})
