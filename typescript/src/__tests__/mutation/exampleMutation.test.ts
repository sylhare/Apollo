import { InvalidNameError, NameTooLongError } from "../../app/errors";
import Example from "../../models/Example";
import { exampleMutation } from "../../resolvers/mutations/exampleMutation";

describe("Example Mutation", () => {

    test("sends invalid name error", async () => {
        const e = new Example('hello');
        const result = await exampleMutation(null, { input: { exampleId: e.id, newName: 'name' } })

        expect(result.example).toBeNull()
        expect(result.userError).toMatchObject([new InvalidNameError('name', ['input', 'newName'])])
    });

    test("sends name too long error", async () => {
        const result = await exampleMutation(null, { input: { exampleId: '1', newName: 'long name' } })

        expect(result.example).toBeNull()
        expect(result.userError).toMatchObject([
            { __typename: InvalidNameError.name },
            { __typename: NameTooLongError.name }
        ])
    });
});
