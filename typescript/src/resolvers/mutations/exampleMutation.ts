import { InvalidNameError, NameTooLongError, UserError } from "../../app/errors";
import Example from "../../models/Example";

interface ExampleInput {
    exampleId: string
    newName: string
}

interface ExampleError extends UserError {}

interface ExamplePayload {
    example: Example | null
    userError: ExampleError[]
}

// Resolver for mutation example, which will always return error(s)
export async function exampleMutation(parent: null, { input }: { input: ExampleInput }): Promise<ExamplePayload> {
    const userErrors: UserError[] = [new InvalidNameError(input.newName, ['input', 'newName'])]
    if (input.newName.length > 5) {
        userErrors.push(new NameTooLongError(['input', 'newName']));
    }

    return { example: null, userError: userErrors }
}
