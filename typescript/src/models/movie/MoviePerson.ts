import Movie from "./Movie";

export enum Role {
    DIRECTOR = 'DIRECTOR',
    ACTOR = 'ACTOR'
}

export class MoviePerson {
    readonly name: string;
    readonly role: Role;
    movieNames: string[] = [];

    constructor(name: string, role: Role, movieNames: string[] = []) {
        this.name = name;
        this.role =role;
        this.movieNames = movieNames
    }
}
