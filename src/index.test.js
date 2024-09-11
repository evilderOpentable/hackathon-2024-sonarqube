import { add, multiply, subtract } from './index';

describe('Math Utilities', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('subtracts 5 - 3 to equal 2', () => {
        expect(subtract(5, 3)).toBe(2);
    });

    test('multiplies 5 * 3 to equal 15', () => {
        expect(multiply(5, 3)).toBe(15);
    });
});
