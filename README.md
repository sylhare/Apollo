# Apollo

Apollo Server with GraphQL experimentation.

## Setup

Install and run the server using:

```bash
npm install
npm start
```

The server will run at [localhost:4000](http://localhost:4000/)

## Usage

### Simple
Once the api launch type this simple _mutation query_ to retrieve the information you need:

```graphql
{
  books {
    title
  }
}
```

Here you want the books and for each the title.

### Query

You can also use named queries like:

```graphql
query GetBooks {
    books {
        title
        author {
            name
        }
    }
}
```

Queries can be structured by the client based on the shape of the object types you define in your schema.
That way they can retrieve as much or as little they need.

### Mutation

Add a book using the mutation query:

```graphql
mutation CreateBook {
    addBook(title: "Fox in Socks", author: "Dr. Seuss") {
        title
        author {
            name
        }
    }
}
```

In theory, you'd have an asynchronous call to save and return the saved data.
However, there's no database linked to it, so The book won't be saved.

### Subscriptions

[Subscriptions](https://www.apollographql.com/docs/apollo-server/data/subscriptions/) are events that are pushed from the server to the client side subscribed to it.
That means it can't be polled via http, but pushed via WebSocket protocol on a specific endpoint.
For example, a chat application's server might use a subscription to push newly received messages to all clients in a particular chat room.

```graphql
subscription BookFeed {
  bookAdded {
    title
  }
}
```

## Sources

- Apollo Server [getting started](https://www.apollographql.com/docs/apollo-server/getting-started/)
- Apollo full stack [tutorial](https://www.apollographql.com/docs/tutorial/introduction/)
