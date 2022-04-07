import Movie from '../../models/movie/Movie'
import { movies } from '../../dataSource/movies'

// Apollo expects an object as parameter
interface MovieInput {
    title: string
}

export async function movie(_: null, { title }: MovieInput, context:any, info: any): Promise<Movie | null> {
    console.log(`${JSON.stringify(info)}`)
    return movies.find(it => it.title === title) ?? null
}
