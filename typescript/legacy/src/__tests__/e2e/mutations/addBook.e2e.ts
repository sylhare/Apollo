import { Application } from '../../../app/server'
import { TestClient } from '../TestClient'
import { gql } from 'apollo-server-express'

describe('addBook', () => {
    const app = new Application()
    let client: TestClient

    beforeAll(async () => {
        await app.start(4444)
        client = new TestClient(new URL(app.graphQlPath()))
    })
    afterAll(async () => app.stop())

    it('creates a addBook mutation', async () => {
        const result = await client.mutate({
            mutation: gql`
                mutation {
                    addBook(input: {title: "book", authorName: "author"}) {
                        book { title, author { name } }
                    }
                }
            `
        }).then(result => result.data.addBook)
        expect(result).toMatchObject({
            book: {
                __typename: 'Book',
                author: {
                    __typename: 'Author',
                    name: 'author',
                },
                title: 'book',
            }
        })
    })

    it('generates user errors', async () => {
        const result = await client.mutate({
            mutation: gql`
                mutation {
                    addBook(input: {title: "📙", authorName: "✍️"}) {
                        book { title, author { name } }
                        userError {
                            ... on UserError {
                                message
                            }
                        }
                    }
                }
            `
        }).then(result => result.data.addBook)
        expect(result.userError.length).toBe(2)
        expect(result).toMatchObject({
            book: null,
            userError: [{
                message: 'Invalid book title'
            }, {
                message: 'Invalid author name'
            }]
        })
    })
})
