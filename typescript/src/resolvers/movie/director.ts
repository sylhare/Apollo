import Movie from "../../models/movie/Movie";
import { moviePersons } from "../../dataSource/movies";
import { GraphQLMoviePerson } from "../query/Movie";

export async function director(parent: Movie, _: any): Promise<GraphQLMoviePerson | null> {
    return moviePersons.find(it => it.name === parent.directorName) ?? null;
}
