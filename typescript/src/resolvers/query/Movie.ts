import Movie from '../../models/movie/Movie'
import { movies } from '../../dataSource/movies'
import { fieldsList, fieldsMap } from 'graphql-fields-list';

// Apollo expects an object as parameter
interface MovieInput {
    title: string
}

export async function movie(_: null, { title }: MovieInput, context:any, info: any): Promise<Movie | null> {
    console.log(`${JSON.stringify(info)}`)
    console.log(`${JSON.stringify(fieldsList(info))}`)
    console.log(`${JSON.stringify(fieldsMap(info, { path: 'director' }))}`)
    console.log(`${JSON.stringify(fieldsMap(info, { skip: ['director'] }))}`)

    return movies.find(it => it.title === title) ?? null
}
