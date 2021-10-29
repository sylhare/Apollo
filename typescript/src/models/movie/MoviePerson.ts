export enum Role {
    DIRECTOR = 'DIRECTOR',
    ACTOR = 'ACTOR'
}

export class MoviePerson {
    readonly name: string;
    readonly role: Role;
    movies: string[] = [];

    constructor(name: string, role: Role, movieNames: string[] = []) {
        this.name = name;
        this.role = role;
        this.movies = movieNames
    }
}
