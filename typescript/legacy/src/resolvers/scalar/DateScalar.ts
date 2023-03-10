import { GraphQLScalarType, Kind, ValueNode } from "graphql";

export const DateScalar = new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    // Convert outgoing Date to integer for JSON
    serialize: (value: Date) => value.getTime(),
    // Convert incoming integer to Date
    parseValue: (value: number) => new Date(value),
    // Convert hard-coded AST string as integer then to Date or return Invalid hard-coded value (not an integer)
    parseLiteral: (ast: ValueNode) => ast.kind === Kind.INT ? new Date(parseInt(ast.value, 10)) : null,
});
