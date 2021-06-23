import { graphql } from "graphql";
import { serviceSchema } from "../service/schemas";

describe("User Schema", () => {
    test("Test getAllUsers query", async () => {
        const query = `
        {
            user: getAllUsers {
                name
            }
        }
        `;
        return graphql(serviceSchema, query).then((result: any) => {
            const users = result.data.user;
            expect(users.length).toBe(2);
        });
    });

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
