import Movie from '../../models/movie/Movie'

export interface GraphQLScene {
    name: string
    location: string
}

export async function scenes(
  movie: Movie,
  { location }: { location: string | null }
): Promise<GraphQLScene[]> {
    return location ? movie.scenes.filter(it => it.location === location) : movie.scenes
}
