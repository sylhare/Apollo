import Movie from '../../models/movie/Movie';
import { movies } from '../../dataSource/movies';

interface GraphQLScene {
    name: string
    location: string
}

export async function scenes(parent: Movie, { location }: { location: string | null }): Promise<GraphQLScene[]> {
    const movie: Movie = movies.find(it => it.title === parent.title)!;
    return location ? movie.scenes.filter(it => it.location === location) : movie.scenes;
}
