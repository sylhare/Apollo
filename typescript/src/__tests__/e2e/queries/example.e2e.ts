import { TestClient } from "../TestClient";
import { gql } from "apollo-server-express";
import { Application } from "../../../app/server";

describe("Example", () => {
    const app = new Application();

    beforeAll(async () => app.start(1111));
    afterAll(async () => app.stop());

    test("Query", async () => {
        const client = new TestClient(new URL(app.graphQlPath()))
        const example = await client.query({
            query: gql`
                query {
                    example {
                        id
                    }
                }
            `
        }).then(result => result.data.example);
        expect(example.id).toBe('1');
    });
});

