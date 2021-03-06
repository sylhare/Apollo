import { graphql } from "graphql";
import { serviceSchema } from "../../apollo/schemas";

describe("Example", () => {
    test("Test example query", async () => {
        const query = `
        {
            example: example {
                id
            }
        }
        `;
        return graphql(serviceSchema, query).then((result: any) => {
            const example = result.data.example;
            console.log(example)
            expect(example.id).toBe('1');
        });
    });
});
