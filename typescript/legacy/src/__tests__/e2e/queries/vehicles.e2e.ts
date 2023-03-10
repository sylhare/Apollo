import { Application } from '../../../app/server';
import { TestClient } from '../TestClient';
import { gql } from 'apollo-server-express';
import { Rim, Vehicle } from '../../../models/Vehicle';

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
                              vehicle {  # tire.vehicle is also called each time to resolve this one
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

  it('resolves entity by federation', async () => {
    const vehicle: Vehicle = await client.query({
      query: gql`
          query {
              _entities(representations: [{
                  __typename: "Vehicle"
                  id: "3"
              }]) {
                  ... on Vehicle { name }
              }
          }
      `
    }).then(result => result.data._entities[0]);
    expect(vehicle).toMatchObject({ name: 'train' });
  });

  it('resolves tire by federation', async () => {
    const vehicle: Vehicle = await client.query({
      query: gql`
          query {
              _entities(representations: [{
                  __typename: "Tire",
                  vehicle: { id: "2" }
                  id: "t12"
              }]) {
                  ... on Tire { id }
              }
          }
      `
    }).then(result => result.data._entities[0]);
    expect(vehicle).toMatchObject({ id: 't12' });
  });
});
