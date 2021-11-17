import Movie from '../../models/movie/Movie';
import { MoviePerson } from '../../models/movie/MoviePerson';
import { moviePersons, movies as moviesDB } from '../../dataSource/movies';

export async function movies(parent: MoviePerson, _: any): Promise<Movie[] | null> {
    const movieNames = moviePersons.find(it => it.name === parent.name)?.movies ?? null;
    return moviesDB.filter(it => movieNames?.includes(it.title));
}
