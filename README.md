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

You can use also named queries like:

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



## Sources

- Apollo Server [getting started](https://www.apollographql.com/docs/apollo-server/getting-started/)
