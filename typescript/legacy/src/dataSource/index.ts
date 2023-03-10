import { BookDataSource } from './books'
import { ProductDataSource } from './products';
import { MoviesDataSource } from './movies';

export type AppContext = Context<AppDataSources>

export abstract class DataSource<TContext = null> {
}

interface Context<TDataSources extends object> {
    dataSources: TDataSources;
    // Other elements to pass to context
}

export interface AppDataSources extends DataSources<Context<any>> {
    books: BookDataSource;
    products: ProductDataSource;
    movies: MoviesDataSource;
}

export type DataSources<TContext> = {
    [name: string]: DataSource<TContext>;
}

export function dataSources(): AppDataSources {
    return {
        books: new BookDataSource(),
        products: new ProductDataSource(),
        movies: new MoviesDataSource(),
    }
}
