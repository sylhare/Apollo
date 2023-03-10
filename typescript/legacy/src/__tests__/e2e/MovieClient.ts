import { TestClient } from './TestClient'
import { gql } from 'apollo-server-express'
import { baseMovieFragment, movieFragment, nestedMovieFragment, overlyNestedMovieFragment } from './fragments'
import { GraphQLMoviePerson } from '../../resolvers/movie/director'
import { GraphQLScene } from '../../resolvers/movie/scenes';

export interface GraphQLMovie {
    title: string
    director: GraphQLMoviePerson
    scenes: GraphQLScene[]
    actors: GraphQLMoviePerson
}

export class MovieClient {
    readonly client: TestClient

    constructor(client: TestClient) {
        this.client = client
    }

    queryByTitle(title: string): Promise<GraphQLMovie> {
        return this.client.query({
            query: gql`
                ${movieFragment}
                query($title: String!) {
                    movie(title: $title) {
                        ...movieFragment
                    }
                }
            `,
            variables: { title },
        }).then(result => result.data.movie)
    }

    queryByTitleFilterScenes(title: string): Promise<GraphQLMovie> {
        return this.client.query({
            query: gql`
                ${baseMovieFragment}
                query($title: String!) {
                    movie(title: $title) {
                        ...baseMovieFragment
                        scenes(location: "Romania") {
                            name
                        }
                    }
                }
            `,
            variables: { title },
        }).then(result => result.data.movie)
    }

    queryByTitleAllScenes(title: string): Promise<GraphQLMovie> {
        return this.client.query({
            query: gql`
                ${baseMovieFragment}
                query($title: String!) {
                    movie(title: $title) {
                        ...baseMovieFragment
                        scenes {
                            name
                        }
                    }
                }
            `,
            variables: { title },
        }).then(result => result.data.movie)
    }

    nestedQueryByTitle(title: string): Promise<GraphQLMovie> {
        return this.client.query({
            query: gql`
                ${nestedMovieFragment}
                query($title: String!) {
                    movie(title: $title) {
                        ...nestedMovieFragment
                    }
                }
            `,
            variables: { title },
        }).then(result => result.data.movie)
    }

    overlyNestedQueryByTitle(title: string): Promise<GraphQLMovie> {
        return this.client.query({
            query: gql`
                ${overlyNestedMovieFragment}
                query($title: String!) {
                    movie(title: $title) {
                        ...overlyNestedMovieFragment
                    }
                }
            `,
            variables: { title },
        }).then(result => result.data.movie)
    }
}
