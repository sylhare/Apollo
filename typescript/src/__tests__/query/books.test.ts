import { graphql } from "graphql";
import { serviceSchema } from "../../app/schemas";
import { Book } from "../../models/BookType";
import { ApolloServer } from "apollo-server-express";

describe("Books", () => {
    const GET_BOOKS = `
            query AllBooks {
                allBooks {
                    title
                }
            }
        `;

    it("queries all books", async () => graphql(serviceSchema, GET_BOOKS)
        .then((result: any) => expect(result.data.allBooks[0].title).toBe('Book 1')
        ));

    it("queries all books with the testServer", async () => {
        const res = await new ApolloServer({ schema: serviceSchema }).executeOperation({ query: GET_BOOKS })

        expect(res.errors).toBe(undefined)
        expect(res?.data?.allBooks).toMatchObject([
            { title: "Book 1" },
            { title: "The legend of Saturna" },
            { title: "Merit City: Last wonder" },
            { title: "Atlanta" },
            { title: "Demonicon" }
        ])
    })

    it("queries one book", async () => {
        const query = `
            query OneBook($title: String! = "Atlanta") {
                book(title: $title) {
                    title
                    author {
                        name
                        __typename
                    }
                    __typename
                }
            }
        `;
        return graphql(serviceSchema, query).then((result: any) => {
            const receivedBooks: Book = result.data.book;
            expect(receivedBooks.title).toBe('Atlanta');
            expect(receivedBooks.author.name).toBe('Don Ross');
        });
    });

    it("queries the lord of the ring", async () => graphql(serviceSchema, `
            query the_lord_of_the_rings {
                lotr {
                    title
                }
            }
        `)
        .then((result: any) => expect(result.data.lotr).toMatchObject({ title: 'The lord of the rings' })
        ));
});
