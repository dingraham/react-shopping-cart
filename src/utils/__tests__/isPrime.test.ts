import isPrime from '../isPrime';

// Test-Driven Development (TDD) Example
// Red - Green - Refactor

describe('[utils] - isPrime', () => {
  test('should return true for prime numbers', () => {
    // expect(isPrime(0)).toBe(true)
    expect(isPrime(1)).toBe(true);
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
  });

  test('should return false for prime numbers', () => {
    // expect(isPrime(-4)).toBe(false)
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(8)).toBe(false);
    expect(isPrime(10)).toBe(false);
  });
});

/** Pros
 * Constant and fast unit test feedback
 * Focus
 * Encourages testable code
 */

/** Cons
 * False Security of passing test (False negatives)
 * Potentially time-consuming
 * Changing requirements
 */
