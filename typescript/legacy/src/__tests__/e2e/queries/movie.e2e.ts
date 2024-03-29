import { Application } from '../../../app/server'
import { TestClient } from '../TestClient'
import { Role } from '../../../models/movie/MoviePerson'

describe('Movie', () => {
    const app = new Application()
    const matrixDirector = {
        name: 'The Wachowskis',
        role: Role.DIRECTOR,
    }

    beforeAll(async () => app.start(2222))
    afterAll(async () => app.stop())

    it('queries existing movie', async () => {
        const client = new TestClient(new URL(app.graphQlPath()))
        await expect(client.movie.queryByTitle('Matrix')).resolves.toMatchObject({
            id: expect.any(String),
            title: 'Matrix',
            director: {
                ...matrixDirector,
                movies: [{
                    title: 'Matrix'
                }]
            },
            scenes: [
                { __typename: 'Scene', location: 'Matrix' },
                { __typename: 'Scene', location: 'Nebuchadnezzar' }
            ],
            actors: [
                {
                    name: 'Keanu Reeves',
                    role: 'ACTOR',
                    movies: [{
                        title: 'Matrix',
                    }, {
                        title: 'John Wick',
                    }, {
                        title: 'Bram Stoker\'s Dracula',
                    }]
                },
                {
                    name: 'Carrie-Anne Moss',
                    role: 'ACTOR',
                    movies: [{
                        title: 'Matrix'
                    }]
                },
                {
                    name: 'Laurence Fishburne',
                    role: 'ACTOR',
                    movies: [{
                        title: 'Matrix',
                    }, {
                        title: 'Apocalypse Now',
                    }]
                }]
        })
    })

    it('queries nested objects in movie', async () => {
        const client = new TestClient(new URL(app.graphQlPath()))
        await expect(client.movie.nestedQueryByTitle('Matrix')).resolves.toMatchObject({
            title: 'Matrix',
            director: {
                ...matrixDirector,
                movies: [{
                    title: 'Matrix',
                    director: {
                        ...matrixDirector,
                        movies: [{
                            title: 'Matrix',
                        }]
                    }
                }]
            }
        })
    })

    it('queries some scenes in movie', async () => {
        const client = new TestClient(new URL(app.graphQlPath()))
        await expect(client.movie.queryByTitleFilterScenes('Bram Stoker\'s Dracula')).resolves.toMatchObject({
            scenes: [{ __typename: 'Scene', name: 'Bran Castle' }]
        })
    })

    it('queries all scenes in movie', async () => {
        const client = new TestClient(new URL(app.graphQlPath()))
        await expect(client.movie.queryByTitleAllScenes('Bram Stoker\'s Dracula')).resolves.toMatchObject({
            'scenes': [
                { __typename: 'Scene', name: 'Bran Castle' },
                { __typename: 'Scene', name: 'street' },
                { __typename: 'Scene', name: 'harbour' },
                { __typename: 'Scene', name: 'countrySide' },
            ],
        })
    })

    it('rejects overly nested queries for movie', async () => {
        const client = new TestClient(new URL(app.graphQlPath()))
        await expect(client.movie.overlyNestedQueryByTitle('Matrix')).rejects.toMatch('exceeds maximum operation depth of')
    })

    it('returns null when the movie does not exist', async () => {
        const client = new TestClient(new URL(app.graphQlPath()))
        await expect(client.movie.queryByTitle('qwerty')).resolves.toBeNull()
    })

    it('queries multiple times same movie for dataloader to use cache', async () => {
        const client = new TestClient(new URL(app.graphQlPath()))
        for (let i = 0; i < 20; i++) {
            await expect(client.movie.nestedQueryByTitle('Matrix')).resolves.toBeDefined();
        }
    })
})
