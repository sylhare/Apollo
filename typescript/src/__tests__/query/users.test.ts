import { graphql } from "graphql";
import { serviceSchema } from "../../apollo/schemas";

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
});
