import { Kind } from "graphql";
import { Odd } from "../../resolvers/scalar/Odd";
import { UserInputError } from "apollo-server-express";

describe('Odd Scalar', () => {
    const odds = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    const invalidOdds = [15.3, 2];

    describe.each(odds)('valid locales', (number: number) => {
        it(`${number} works on serialize`, async () => expect(Odd.serialize(number)).toBe(number));
        it(`${number} works on parseValue`, async () => expect(Odd.parseValue(number)).toBe(number));
        it(`${number} works on parseLiteral`, async () => expect(Odd.parseLiteral({
            kind: Kind.INT,
            value: number.toString(),
        }, null)).toBe(number));
    });

    describe.each(invalidOdds)('invalid locales', (number: number) => {
        it(`${number} throws on serialize`, async () => expect(() => Odd.serialize(number)).toThrow(UserInputError));
        it(`${number} throws on parseValue`, async () => expect(() => Odd.parseValue(number)).toThrow(UserInputError));
        it(`${number} throws on parseLiteral`, async () => expect(() => Odd.parseLiteral({
            kind: Kind.STRING,
            value: number.toString()
        }, null)).toThrow(UserInputError));
    });

    it('throws an error on other kind', () =>
        expect(() =>
            Odd.parseLiteral({ kind: Kind.STRING, value: '1', }, null,),
        ).toThrow(UserInputError));

    it('throws an error on other value', () =>
        expect(() =>
            Odd.parseLiteral({ kind: Kind.INT, value: 'a', }, null,),
        ).toThrow(UserInputError));
});
