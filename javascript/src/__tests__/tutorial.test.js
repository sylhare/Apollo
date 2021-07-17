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
        console.log(JSON.stringify(data));
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
        console.log(JSON.stringify(data));
        expect(data).toEqual({
            addBook: { title: "Fox in Socks", author: { name: "Dr. Seuss" } }
        });
    });

    test("Query with params", async () => {
        const { query } = createTestClient(server);
        const { data } = await query({
            query: gql`
                query  GetCheeky {
                    cheeky(message: "Heya") {
                        message
                    }
                }`
        });
        console.log(data)
        expect(data).toEqual({ cheeky: { message: "Heya" } });
    });

    test("Ping", async () => {
        const { query } = createTestClient(server);
        const { data } = await query({
            query: gql`
                query PingMessage($message: String!) {
                    ping(message: $message)
                }`,
            variables: { message: 'Meow' },
        });
        expect(data).toEqual({ ping: "Answering Meow" });
    });

})
;
