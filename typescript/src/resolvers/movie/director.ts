import Movie from "../../models/movie/Movie";
import { moviePersons, movies } from "../../dataSource/movies";
import { MoviePerson } from "../../models/movie/MoviePerson";

export async function director(parent: Movie, _: any): Promise<MoviePerson | null> {
    return moviePersons.find(it => it.name === parent.directorName) ?? null;
}
