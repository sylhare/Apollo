import { graphql } from "graphql";
import { serviceSchema } from "../../apollo/schemas";

describe("Books", () => {
    test("Query all books", async () => {
        const query = `
            query AllBooks {
                allBooks {
                    title
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
