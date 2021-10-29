export default class Movie {
    readonly title: string;
    readonly directorName: string;
    readonly actorsName: string[];

    constructor(title: string, director: string, actors: string[] = []) {
        this.title = title;
        this.directorName = director;
        this.actorsName = actors;
    }
}
