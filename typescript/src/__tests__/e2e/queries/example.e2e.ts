import { TestClient } from '../TestClient'
import { gql } from 'apollo-server-express'
import { Application } from '../../../app/server'
import Example from "../../../models/Example";
import { user } from "../fragments";

describe('Example', () => {
    const app = new Application()

    beforeAll(async () => app.start(1111))
    afterAll(async () => app.stop())

    test('Query', async () => {
        const client = new TestClient(new URL(app.graphQlPath()))
        const example: Example = await client.query({
            query: gql`
                query {
                    example {
                        id
                        user { name }
                    }
                }
            `
        }).then(result => result.data.example)
        expect(example.id).toBe('1')
        expect(example.user.name).toBe('user-example-1')
    })

    test('Query with fragments', async () => {
        const client = new TestClient(new URL(app.graphQlPath()))
        const example: Example = await client.query({
            query: gql`
                ${user}
                query {
                    example {
                        id
                        user { ...user }
                    }
                }
            `
        }).then(result => result.data.example)
        expect(example.id).toBe('1')
        expect(example.user.name).toBe('user-example-1')
    })

    describe('With Directives', () => {
        test.each([
            gql`query {
                example {
                    id
                    user @skip(if: true) { name }
                }
            }`,
            gql`query {
                example {
                    id
                    user @include(if: false) { name }
                }
            }`,
            gql`query {
                example { id }
            }`
        ])('Query', async (query: any) => {
            const client = new TestClient(new URL(app.graphQlPath()))
            const example: Example = await client.query({ query })
                .then(result => result.data.example)
            expect(example.id).toBe('1')
            expect(example.user).toBeUndefined()
        })
    })
})

