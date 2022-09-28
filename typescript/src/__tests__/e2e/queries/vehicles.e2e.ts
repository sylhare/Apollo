import { Application } from '../../../app/server';
import { TestClient } from '../TestClient';
import { gql } from 'apollo-server-express';
import { Vehicle, Rim } from '../../../models/Vehicle';

describe('Vehicles', () => {
  const app = new Application()
  let client: TestClient;

  beforeAll(async () => {
    await app.start(9526);
    client = new TestClient(new URL(app.graphQlPath()));
  })
  afterAll(async () => app.stop())

  it('resolves vehicle on rims and tires', async () => {
    const vehicles: Vehicle[] = await client.query({
      query: gql`
          query {
              vehicles {
                  rims {  # resolved by vehicle.rims resolver
                      vehicle {
                          id
                      }
                  }
                  tires {  # resolved by vehicle.tires resolver
                      vehicle {
                          id
                      }
                  }
              }
          }
      `
    }).then(result => result.data.vehicles);
    expect(vehicles[0].tires[0].vehicle).toBeDefined();
    expect(vehicles[0].rims[0].vehicle).toBeDefined();
  });
});
