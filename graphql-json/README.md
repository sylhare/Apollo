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
