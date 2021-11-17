import { AppContext } from '../../../dataSource';
import { AddBookError, AddBookInput, AddBookPayload } from './interfaces';
import { validateInput } from './validations';

export async function addBook(
    parent: null,
    { input }: { input: AddBookInput },
    { dataSources }: AppContext
): Promise<AddBookPayload> {
    const errors: AddBookError[] = validateInput(input);
    const addedBook = errors.length ? undefined : await dataSources.books.createBook(input.title, input.authorName);

    return { book: addedBook, userError: errors };
}
