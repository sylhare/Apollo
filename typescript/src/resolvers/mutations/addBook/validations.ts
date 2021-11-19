import { AddBookError, AddBookInput } from './interfaces'
import { InvalidAuthorName, InvalidBookTitle } from './errors'

export function validateInput(input: AddBookInput): AddBookError[] {
    const regex = /\W/g
    const errors: AddBookError[] = []

    if (regex.test(input.title)) errors.push(new InvalidBookTitle())
    if (regex.test(input.authorName)) errors.push(new InvalidAuthorName())
    return errors
}
