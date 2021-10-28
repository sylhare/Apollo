import { MoviePerson } from "./MoviePerson";

export default class Movie {
    readonly name: string;
    readonly directorName: string;
    readonly actorsName: string[];

    constructor(name: string, director: string, actors: string[] = []) {
        this.name = name;
        this.directorName = director;
        this.actorsName = actors;
    }
}
