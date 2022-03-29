import { GraphQLScalarType, Kind, ValueNode } from "graphql";

export const DateScalar = new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value: Date) {
        return value.getTime(); // Convert outgoing Date to integer for JSON
    },
    parseValue(value: number) {
        return new Date(value); // Convert incoming integer to Date
    },
    parseLiteral(ast: ValueNode) {
        if (ast.kind === Kind.INT) {
            return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
        }
        return null; // Invalid hard-coded value (not an integer)
    },
});
