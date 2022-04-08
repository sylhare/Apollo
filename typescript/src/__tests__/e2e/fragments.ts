import { gql } from 'apollo-server-express'

export const user = gql`
    fragment user on User {
        name
    }
`

export const baseMovieFragment = gql`
    fragment baseMovieFragment on Movie {
        title
    }
`

export const movieFragment = gql`
    ${baseMovieFragment}
    fragment movieFragment on Movie {
        ...baseMovieFragment
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
`

export const nestedMovieFragment = gql`
    ${baseMovieFragment}
    fragment nestedMovieFragment on Movie {
        ...baseMovieFragment
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
`

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
`
