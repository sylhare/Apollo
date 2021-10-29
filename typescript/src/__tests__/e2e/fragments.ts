import { gql } from "apollo-server-express";

export const movieFragment = gql`
    fragment movieFragment on Movie {
        title
        director {
            name
            role
        }
    }
`;
