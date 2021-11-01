import { TestClient } from "./TestClient";
import { gql } from "apollo-server-express";
import { movieFragment, nestedMovieFragment } from "./fragments";
import { GraphQLMoviePerson } from "../../resolvers/movie/director";

export interface GraphQLMovie {
    title: string
    director: GraphQLMoviePerson
    actors: GraphQLMoviePerson
}

export class MovieClient {
    readonly client: TestClient;

    constructor(client: TestClient) {
        this.client = client;
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
        }).then(result => result.data.movie);
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
        }).then(result => result.data.movie);
    }
}
