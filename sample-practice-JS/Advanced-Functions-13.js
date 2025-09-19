// Write a recursive function to calculate the factorial of a given number.
// ver 1
// const factorial = (x) => x === 0 || x === 1 ? 1 : x * factorial(x - 1);

// ver 2
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

const result = factorial(5);
console.log(result);
