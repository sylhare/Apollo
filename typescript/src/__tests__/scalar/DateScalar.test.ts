import { Kind } from 'graphql';
import { DateScalar } from '../../resolvers/scalar/DateScalar';

describe('Date Scalar', () => {
  it('works on serialize', () => {
    expect(DateScalar.serialize(new Date(1609462800000))).toEqual(1609462800000);
    expect(DateScalar.serialize(new Date('2021-01-01T01:00:00.000Z'))).toEqual(1609462800000);
  });
  it('works on parseValue', () => {
    expect(DateScalar.parseValue(1609462800000)).toEqual(new Date('2021-01-01T01:00:00.000Z'));
    expect(DateScalar.parseValue('2021-01-01T01:00:00.000Z')).toEqual(new Date('2021-01-01T01:00:00.000Z'));
  });
  it('works on parseLiteral', () => {
    expect(DateScalar.parseLiteral({ kind: Kind.INT, value: '1609462800000' }, null))
      .toEqual(new Date(1609462800000));
    expect(DateScalar.parseLiteral({ kind: Kind.STRING, value: '2021-01-01T01:00:00.000Z' }, null))
      .toEqual(null);
  });
});
