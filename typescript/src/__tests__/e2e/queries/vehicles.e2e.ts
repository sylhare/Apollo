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

  it('resolves vehicle within from vehicles.rims.vehicle.tires.vehicle', async () => {
    const vehicles: Vehicle[] = await client.query({
      query: gql`
          query {
              vehicles {
                  rims {                 # resolved by vehicle.rims resolver
                      vehicle {
                          id
                          tires {        # resolved by vehicle.tires resolver from vehicle resolved by vehicle.rims resolver
                              vehicle {
                                  name
                              }
                          }
                      }
                  }
              }
          }
      `
    }).then(result => result.data.vehicles);
    expect(vehicles[0].rims[0].vehicle!!.tires[0].vehicle).toMatchObject({ name: 'mono-cycle' });
  });

  it('resolves vehicle within from rims.vehicle.tires.vehicle', async () => {
    const rims: Rim[] = await client.query({
      query: gql`
          query {
              allRims {
                  id
                  vehicle { # resolved by rim.vehicle resolver
                      name
                      tires { # resolved by tire.vehicle resolver
                          vehicle {
                              name
                          }
                      }
                  }
              }
          }
      `
    }).then(result => result.data.allRims);
    expect(rims[0].vehicle!!.tires[0].vehicle).toMatchObject({ name: 'mono-cycle' });
  });

});
