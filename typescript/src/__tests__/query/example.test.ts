import { graphql } from "graphql";
import { serviceSchema } from "../../app/schemas";

describe("Example", () => {
    test("Query", async () => {
        const query = `
        {
            example: example {
                id
            }
        }
        `;
        return graphql(serviceSchema, query).then((result: any) => {
            const example = result.data.example;
            expect(example.id).toBe('1');
        });
    });
});
