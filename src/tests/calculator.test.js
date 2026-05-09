const { add, subtract, multiply, divide } = require('../calculator');

describe('calculator', () => {
  test('addition: 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtraction: 10 - 4 = 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('multiplication: 45 * 2 = 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('division: 20 / 5 = 4', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('division by zero throws', () => {
    expect(() => divide(1, 0)).toThrow('Division by zero');
  });

  test('floating point: 0.1 + 0.2 ~= 0.3', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3, 5);
  });

  test('negative numbers and subtraction', () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  test('multiply by zero', () => {
    expect(multiply(12345, 0)).toBe(0);
  });
});
