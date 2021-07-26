import { graphql } from "graphql";
import { serviceSchema } from "../../apollo/schemas";
import { Book } from "../../models/BookType";

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
            console.log("Result received: " + JSON.stringify(result))
            const receivedBooks: Book[] = result.data.allBooks;
            expect(receivedBooks[0].title).toBe('Book 1');
        });
    });

    test("Query one book", async () => {
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
            console.log("Result received: " + JSON.stringify(result))
            const receivedBooks: Book = result.data.book;
            expect(receivedBooks.title).toBe('Atlanta');
            expect(receivedBooks.author.name).toBe('Don Ross');
        });
    });
});
