import Movie from '../../models/movie/Movie'
import { moviePersons } from '../../dataSource/movies'
import { GraphQLMoviePerson } from './director'

export async function actors(parent: Movie, _: any): Promise<GraphQLMoviePerson[]> {
    return moviePersons.filter(it => parent.actorsName.includes(it.name))
}
