import { Scene } from './Scene'

export default class Movie {
    readonly title: string
    readonly directorName: string
    readonly actorsName: string[]
    readonly scenes: Scene[]

    constructor(title: string, director: string, actors: string[] = [], scenes: Scene[] = []) {
        this.title = title
        this.directorName = director
        this.actorsName = actors
        this.scenes = scenes
    }
}
