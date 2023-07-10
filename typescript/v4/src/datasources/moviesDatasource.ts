import { AugmentedRequest, RESTDataSource } from '@apollo/datasource-rest';
import { KeyValueCache } from '@apollo/utils.keyvaluecache';
import { Movie } from '../models/Movie';
import { Context } from './context';

export interface MoviesDataSource {
  getMovie(id: string): Promise<Movie>;
  updateMovie(movie: Movie): Promise<Movie>;
}

export class MoviesRESTDatasource extends RESTDataSource implements MoviesDataSource {
  override baseURL = 'https://movies-api.example.com/';
  private readonly token: string;

  constructor(options: { token: string; cache: KeyValueCache }) {
    super(options); // this sends our server's `cache` through
    this.token = options.token;
  }

  override willSendRequest(path: string, request: AugmentedRequest) {
    request.headers.authorization = this.token;
  }

  async getMovie(id: string): Promise<Movie> {
    return this.get<Movie>(`movies/${encodeURIComponent(id)}`);
  }

  async updateMovie(movie: Movie): Promise<Movie> {
    return this.patch(
      'movies',
      { body: { id: movie.id, movie } },
    );
  }
}
