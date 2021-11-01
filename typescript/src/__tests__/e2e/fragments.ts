import { gql } from "apollo-server-express";

export const movieFragment = gql`
    fragment movieFragment on Movie {
        title
        director {
            name
            role
            movies {
                title
            }
        }
        actors {
            name
            role
            movies {
                title
            }
        }
    }
`;

export const nestedMovieFragment = gql`
    fragment nestedMovieFragment on Movie {
        title
        director {
            name
            role
            movies {
                title
                director {
                    name
                    role
                    movies {
                        title
                    }
                }
            }
        }
    }
`;

export const overlyNestedMovieFragment = gql`
    fragment overlyNestedMovieFragment on Movie {
        title
        director {
            movies {
                title
                director {
                    movies {
                        title
                        director {
                            movies {
                                title
                                director {
                                    movies {
                                        title
                                        director {
                                            movies {
                                                title
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
