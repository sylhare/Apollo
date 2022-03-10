import { Application } from '../../../app/server';
import { TestClient } from '../TestClient';
import { gql } from 'apollo-server-express';

describe('Product', () => {
  const app = new Application()

  beforeAll(async () => app.start(9876))
  afterAll(async () => app.stop())

  it('creates a product', async () => {
    const client = new TestClient(new URL(app.graphQlPath()))
    const product = await client.mutate({
      mutation: gql`
          mutation {
              createProduct {
                  id
              }
          }
      `
    }).then(result => result.data.createProduct)
    expect(product).toMatchObject({
      id: expect.any(Number)
    })
  })

  it('sets a product description', async () => {
    const client = new TestClient(new URL(app.graphQlPath()))
    const product = await client.mutate({
      mutation: gql`
          mutation {
              setProductDescription(id: 1, description: "hello product") {
                  id
                  description
              }
          }
      `
    }).then(result => result.data.setProductDescription)
    expect(product).toMatchObject({
      id: 1,
      description: 'hello product'
    })
  })

  it('sets a product name', async () => {
    const client = new TestClient(new URL(app.graphQlPath()))
    const product = await client.mutate({
      mutation: gql`
          mutation {
              setProductName(id: 1, name: "el producto") {
                  id
                  name
              }
          }
      `
    }).then(result => result.data.setProductName)
    expect(product).toMatchObject({
      id: 1,
      name: 'el producto'
    })
  })
})
