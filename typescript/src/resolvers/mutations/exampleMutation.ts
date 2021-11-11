import { InvalidNameError, NameTooLongError, UserInputError } from "../../app/errors";
import Example from "../../models/Example";

interface ExampleInput {
    exampleId: string
    newName: string
    number?: number
}

interface ExamplePayload {
    example: Example | null
    userError?: UserInputError[]
}

export async function exampleMutation(parent: null, { input }: { input: ExampleInput }): Promise<ExamplePayload> {
    if (input.number) {
        return { example: new Example(input.newName, input.exampleId) }
    } else {
        return { example: null, userError: errorsFrom(input) };
    }
}

function errorsFrom(input: ExampleInput): UserInputError[] {
    const userErrors: UserInputError[] = [new InvalidNameError(input.newName, ['input', 'newName'])]
    if (input.newName.length > 5) {
        userErrors.push(new NameTooLongError(['input', 'newName']));
    }

    return userErrors
}
