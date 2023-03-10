import { Scene } from './Scene'
import * as uuid from 'uuid';

export default class Movie {
    readonly id: string
    readonly title: string
    readonly directorName: string
    readonly actorsName: string[]
    readonly scenes: Scene[]

    constructor(title: string, director: string, actors: string[] = [], scenes: Scene[] = []) {
        this.id = uuid.v4()
        this.title = title
        this.directorName = director
        this.actorsName = actors
        this.scenes = scenes
    }
}
