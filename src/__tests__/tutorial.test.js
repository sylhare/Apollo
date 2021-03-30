const { gql } = require("apollo-server");
const { server } = require("../server");
const { createTestClient } = require('apollo-server-testing');


describe('[Tutorial tests]', () => {

    test("Basic book query", async () => {
        const { query } = createTestClient(server);
        const { data } = await query({
            query: gql`{ books { title } }`
        });
        expect(data).toEqual({
            books: [{ title: "The Awakening" }, { title: "City of Glass" }]
        });
    });

    test("Basic author query", async () => {
        const { query } = createTestClient(server);
        const { data } = await query({
            query: gql`{ authors { name } }`
        });
        expect(data).toEqual({
            authors: [{ name: "Paul Auster" }, { name: "Kate Chopin" }]
        });
    });

    test("Named query", async () => {
        const { query } = createTestClient(server);
        const { data } = await query({
            query: gql`
                query GetBooks {
                    books {
                        title
                        author { name }
                    }
                }
            `
        });
        expect(data).toEqual({
                books: [
                    { title: "The Awakening", author: { name: "Kate Chopin" } },
                    { title: "City of Glass", author: { name: "Paul Auster" } }]
            }
        );
    });

    test("Named mutation", async () => {
        const { query } = createTestClient(server);
        const { data } = await query({
            query: gql`
                mutation CreateBook {
                    addBook(title: "Fox in Socks", author: "Dr. Seuss") {
                        title
                        author { name }
                    }
                }
            `
        });
        expect(data).toEqual({
            addBook: { title: "Fox in Socks", author: { name: "Dr. Seuss" } }
        });
    });

});
