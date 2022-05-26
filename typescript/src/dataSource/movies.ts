import Movie from '../models/movie/Movie'
import { MoviePerson, Role } from '../models/movie/MoviePerson'
import { Scene } from '../models/movie/Scene'
import { DataSource } from './index';
import DataLoader from 'dataloader';

export class MoviesDataSource implements DataSource {
    readonly loader: DataLoader<string, (Movie | undefined)>
    private loadCounter = 0;

    constructor() {
        this.loader = new DataLoader(title => this.findFromTitle(title))
    }

    findFromTitle(titles: readonly string[]): Promise<(Movie | undefined)[]> {
        console.log(`${this.loadCounter++} - find title(s): [${titles.join(', ')}]`);
        return Promise.resolve(titles.map(title =>
          this.movies.find(movie => movie.title === title)));
    }

    private readonly londonScene = (name: string) => new Scene(name, 'London')
    private readonly movies: Movie[] = [
        new Movie('Matrix', 'The Wachowskis',
          ['Keanu Reeves', 'Carrie-Anne Moss', 'Laurence Fishburne'],
          [new Scene('town', 'Matrix'), new Scene('crew meeting', 'Nebuchadnezzar')]
        ),
        new Movie('John Wick', 'Chad Stahelski',
          ['Keanu Reeves']),
        new Movie('Apocalypse Now', 'Francis Ford Coppola',
          ['Martin Sheen', 'Laurence Fishburne']),
        new Movie('Bram Stoker\'s Dracula', 'Francis Ford Coppola',
          ['Gary Oldman', 'Winona Ryder', 'Anthony Hopkins', 'Keanu Reeves'],
          [new Scene('Bran Castle', 'Romania'), this.londonScene('street'), this.londonScene('harbour'), this.londonScene('countrySide')]),
        new Movie('Surface', 'Leo Strozzi'),
    ]
}

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
