import Movie from '../../models/movie/Movie'
import { moviePersons } from '../../dataSource/movies'
import { Role } from '../../models/movie/MoviePerson'

export interface GraphQLMoviePerson {
    name: string
    movies: string[]
    role: Role
}

export async function director(parent: Movie, _: any): Promise<GraphQLMoviePerson> {
    return moviePersons.find(it => it.name === parent.directorName)!
}
