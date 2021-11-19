import { Application } from '../../../app/server'
import { TestClient } from '../TestClient'
import { gql } from 'apollo-server-express'

describe('Example', () => {
    const app = new Application()

    beforeAll(async () => app.start(3333))
    afterAll(async () => app.stop())

    it('works when odd number is not null', async () => {
        const client = new TestClient(new URL(app.graphQlPath()))
        const result = await client.mutate({
            mutation: gql`
                mutation {
                    exampleMutation(input: {exampleId: "1", newName: "new", number: 3}) {
                        example { id }
                    }
                }
            `
        }).then(result => result.data.exampleMutation)
        expect(result.example.id).toBe('1')
    })

    describe.each(['3', 2, 'random', 15.235])('', (value: any) => {
        it(`fails on wrong Odd scalar ${value}`, async () => {
            const client = new TestClient(new URL(app.graphQlPath()))
            await expect(client.mutate({
                mutation: gql`
                    mutation {
                        exampleMutation(input: {exampleId: "1", newName: "new", number: value}) {
                            example { id }
                        }
                    }
                `
            })).rejects.toMatch('not an odd integer')
        })
    })
})
