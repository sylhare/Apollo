# Apollo with kotlin

Follow the get started [Apollo Kotlin](https://www.apollographql.com/docs/android/essentials/get-started-kotlin/)

## Setup

Download the schema from the tutorial server https://apollo-fullstack-tutorial.herokuapp.com/graphql with the gradle
task:

```shell
./gradlew downloadApolloSchema \
  --endpoint="https://apollo-fullstack-tutorial.herokuapp.com/graphql" \
  --schema="src/main/graphql/schema.json"
```

You can use `--header="Authorization: Bearer $TOKEN"` if the endpoint requires authentication.

> Make sure that the schema path is valid

Then add the graphql file using the schema and on build it will generate the models and add it to your class path.
