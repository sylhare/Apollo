import { Application } from "../../../app/server";
import { TestClient } from "../TestClient";
import { Role } from "../../../models/movie/MoviePerson";

describe("Movie", () => {
    const app = new Application();

    beforeAll(async () => app.start(2222));
    afterAll(async () => app.stop());

    it("queries existing movie", async () => {
        const client = new TestClient(new URL(app.graphQlPath()));
        await expect(client.movie.queryByTitle('Matrix')).resolves.toMatchObject({
            title: 'Matrix',
            director: {
                name: 'The Wachowskis',
                role: Role.DIRECTOR,
                movies: ['Matrix']
            }
        });
    });
});
