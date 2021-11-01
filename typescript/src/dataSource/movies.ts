import Movie from "../models/movie/Movie";
import { MoviePerson, Role } from "../models/movie/MoviePerson";
import { Scene } from "../models/movie/Scene";

const londonScene = (name: string) => new Scene(name, 'London')

export const movies: Movie[] = [
    new Movie('Matrix', 'The Wachowskis',
        ['Keanu Reeves', 'Carrie-Anne Moss', 'Laurence Fishburne']),
    new Movie('John Wick', 'Chad Stahelski',
        ['Keanu Reeves']),
    new Movie('Apocalypse Now', 'Francis Ford Coppola',
        ['Martin Sheen', 'Laurence Fishburne']),
    new Movie('Bram Stoker\'s Dracula', 'Francis Ford Coppola',
        ['Gary Oldman', 'Winona Ryder', 'Anthony Hopkins', 'Keanu Reeves'],
        [new Scene('Bran Castle', 'Romania'), londonScene('street'), londonScene('harbour'), londonScene('countrySide')]),
    new Movie('Surface', 'Leo Strozzi'),
]

export const moviePersons: MoviePerson[] = [
    new MoviePerson('The Wachowskis', Role.DIRECTOR, ['Matrix']),
    new MoviePerson('Keanu Reeves', Role.ACTOR, ['Matrix', 'John Wick', 'Bram Stoker\'s Dracula']),
    new MoviePerson('Carrie-Anne Moss', Role.ACTOR, ['Matrix']),
    new MoviePerson('Laurence Fishburne', Role.ACTOR, ['Matrix', 'Apocalypse Now']),
    new MoviePerson('Chad Stahelski', Role.DIRECTOR, ['John Wick']),
    new MoviePerson('Francis Ford Coppola', Role.DIRECTOR, ['Apocalypse Now', 'Bram Stoker\'s Dracula']),
    new MoviePerson('Martin Sheen', Role.ACTOR, ['Apocalypse Now']),
    new MoviePerson('Gary Oldman', Role.ACTOR, ['Bram Stoker\'s Dracula']),
    new MoviePerson('Winona Ryder', Role.ACTOR, ['Bram Stoker\'s Dracula']),
    new MoviePerson('Anthony Hopkins', Role.ACTOR, ['Bram Stoker\'s Dracula']),
    new MoviePerson('Leo Strozzi', Role.DIRECTOR, ['Surface']),
    new MoviePerson('Joe', Role.DIRECTOR)
]
