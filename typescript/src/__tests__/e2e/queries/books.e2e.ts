import testServer from "../testServer";

describe('MoviesAPI', () => {
    it('fetches all movies', async () => {
        const { query } = testServer(null);
        const GET_BOOKS = `
            query AllBooks {
                allBooks {
                    title
                }
            }
        `;

        const res = await query({ query: GET_BOOKS })
        expect(res.errors).toBe(undefined)
        expect(res?.data?.allBooks).toMatchObject([
            { title: "Book 1" },
            { title: "The legend of Saturna" },
            { title: "Merit City: Last wonder" },
            { title: "Atlanta" },
            { title: "Demonicon" }
        ])
    })
})
