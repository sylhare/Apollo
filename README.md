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

Once the api launch type the mutation query to retrieve the information you need:

```graphql
{
  books {
    title
    author
  }
}
```

Here you want the books and for each the title and author.

## Sources

- Apollo Server [getting started](https://www.apollographql.com/docs/apollo-server/getting-started/)
