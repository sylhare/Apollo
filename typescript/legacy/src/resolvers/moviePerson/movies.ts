import Movie from '../../models/movie/Movie'
import { MoviePerson } from '../../models/movie/MoviePerson'
import { moviePersons } from '../../dataSource/movies'
import { AppContext } from '../../dataSource';

export async function movies(
  parent: MoviePerson,
  _: any,
  { dataSources: { movies } }: AppContext
): Promise<Array<Error | Movie | undefined>> {
    const movieNames = moviePersons.find(it => it.name === parent.name)?.movies ?? [];
    return movies.loader.loadMany(movieNames);
}
