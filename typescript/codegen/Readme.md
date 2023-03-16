# Apollo Server

Using v4 and code generation for the apollo type

- Code generation from the graphql guild in [typescript](https://the-guild.dev/graphql/codegen)
- Apollo generation [documentation](https://www.apollographql.com/docs/apollo-server/workflow/generate-types/)

Add codegen dependencies with:

```bash
npm install -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-resolvers
```

Run the code generation with:

```bash
npx graphql-code-generator -c codegen.yml 
```

[Further reading](https://the-guild.dev/graphql/codegen/docs/guides/further-reading)
