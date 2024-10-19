// math.test.ts
import { mean } from '../src/math';

describe('mean()', () => {
    test('should return the correct mean for an array of positive numbers', () => {
        const result = mean([1, 2, 3, 4, 5]);
        expect(result).toBe(3);
    });

    test('should return the correct mean for an array of negative numbers', () => {
        const result = mean([-1, -2, -3, -4, -5]);
        expect(result).toBe(-3);
    });

    test('should return the correct mean for an array with both positive and negative numbers', () => {
        const result = mean([-1, 1, -2, 2, -3, 3]);
        expect(result).toBe(0);
    });

    test('should return NaN for an empty array', () => {
        const result = mean([]);
        expect(result).toBeNaN();
    });

    test('should handle an array with one number', () => {
        const result = mean([7]);
        expect(result).toBe(7);
    });

    test('should return a mean of 0 for an array of all zeros', () => {
        const result = mean([0, 0, 0, 0, 0]);
        expect(result).toBe(0);
    });

    test('should handle an array with decimal numbers', () => {
        const result = mean([1.5, 2.5, 3.5]);
        expect(result).toBe(2.5);
    });
});
