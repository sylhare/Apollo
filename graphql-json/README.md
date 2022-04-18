# GraphQL -> JSON

For the Kotlin creation of the class,
put your graphQL schema elements in `schema.graphQL`, then start the app:

```shell
npm start
```

Generate the `schema.json` with:

```shell
./gradlew downloadApolloSchema \
  --endpoint="http://localhost:4000/" \
  --schema="schema.json"
```

The gradle task will query your application for `__schema`, here is a very limited 
example on what it would do _as an example_:

```bash
curl 'http://localhost:4000/graphql' -X POST -H "Content-Type: application/json" --data-binary '{"variables":{},"query":"{ __schema { types { kind name possibleTypes { name } } }}"}'
```

> You can also try https://www.graphql-code-generator.com/ for typescript
