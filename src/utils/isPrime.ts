// Validates if a number is prime
const isPrime = (number: number): boolean => {
  if (number <= 3) return true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
};

export default isPrime;
