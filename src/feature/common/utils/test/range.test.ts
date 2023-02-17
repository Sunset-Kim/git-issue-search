import 'jest';
import { range } from '../range';

describe('range', () => {
  it('same case', () => {
    const result = range(1, 1);
    expect(result).toEqual([1]);
  });

  it('reverse case', () => {
    const result = range(4, 1);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it('nomal case', () => {
    const result = range(1, 4);
    expect(result).toEqual([1, 2, 3, 4]);
  });
});
