import { gql } from 'apollo-server-express'

export const user = gql`
    fragment user on User {
        name
    }
`

export const baseMovieFragment = gql`
    fragment baseMovieFragment on Movie {
        id
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
        scenes {
            location
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
        actors {
            movies {
                ...baseMovieFragment
            }
        }
        director {
            name
            role
            movies {
                ...baseMovieFragment
                director {
                    name
                    role
                    movies {
                        ...baseMovieFragment
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
