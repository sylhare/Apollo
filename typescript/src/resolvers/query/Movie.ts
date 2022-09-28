import Movie from '../../models/movie/Movie'
import { AppContext } from '../../dataSource';

// Apollo expects an object as parameter
interface MovieInput {
  title: string
}

export async function movie(
  _: null,
  { title }: MovieInput,
  { dataSources: { movies } }: AppContext
): Promise<Movie | undefined> {
  //return movies.erroredLoader.load({ title });
  return movies.loader.load(title);
}
