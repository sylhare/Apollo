import { TestClient } from "../TestClient";
import { gql } from "apollo-server-express";
import { httpServer } from "../../../app/server";

describe("Example", () => {
    const server = httpServer;
    const PORT = 3000;

    beforeAll(async () => await server.listen({ port: PORT }, (): void =>
        console.log(`🚀GraphQL-Server is running on http://localhost:${PORT}/graphql`)
    ));

    afterAll(async () => await server.close());

    test("Query", async () => {
        const client = new TestClient(new URL(`http://localhost:${PORT}/graphql`))
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

