import { GraphQLScalarType, Kind, ValueNode } from 'graphql';
import { UserInputError } from "apollo-server-express";

function validate(value: number) {
    if (Number.isInteger(value) && value % 2 !== 0) {
        return value;
    }
    throw new UserInputError("Provided value is not an odd integer");
}

export const OddScalar = new GraphQLScalarType({
    name: 'Odd',
    description: 'Odd custom scalar type',
    serialize: validate,
    parseValue: validate,
    parseLiteral(ast: ValueNode) {
        if (ast.kind === Kind.INT) return validate(Number.parseInt(ast.value));
        else throw new UserInputError("Provided value is not an odd integer");
    },
    extensions: { codegenScalarType: 'string' },
});
