import { BookDataSource } from './books'

export type AppContext = Context<AppDataSources>

export abstract class DataSource<TContext> {
}

interface Context<TDataSources extends object> {
    dataSources: TDataSources;
    // Other elements to pass to context
}

export interface AppDataSources extends DataSources<any> {
    books: BookDataSource<any>
}

export type DataSources<TContext> = {
    [name: string]: DataSource<TContext>;
};

export function dataSources<TContext>(): DataSources<TContext> {
    return {
        books: new BookDataSource<TContext>()
    }
}
