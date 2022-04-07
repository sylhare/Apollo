import Movie from '../../models/movie/Movie'
import { movies } from '../../dataSource/movies'

// Apollo expects an object as parameter
interface MovieInput {
    title: string
}

export async function movie(_: null, { title }: MovieInput): Promise<Movie | null> {
    return movies.find(it => it.title === title) ?? null
}
