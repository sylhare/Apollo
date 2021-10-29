import { TestClient } from "./TestClient";
import { gql } from "apollo-server-express";
import Movie from "../../models/movie/Movie";
import { movieFragment } from "./fragments";

export class MovieClient {
    readonly client: TestClient;

    constructor(client: TestClient) {
        this.client = client;
    }

    queryByTitle(title: string): Promise<Movie> {
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
}
