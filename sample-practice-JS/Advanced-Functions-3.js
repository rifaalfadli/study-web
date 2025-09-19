// Write a function that takes an array of numbers and returns the sum of the squares of each number. 
// Use an anonymous function to calculate the square of each element.
const arrayNumbers = [1, 2, 3, 4, 5];

// ver 1
// function calculateSumOfSquares(arr) {
//     return arr.map(function (num) {
//         return num * num;
//     }).reduce((acc, val) => acc + val, 0);
// }

// ver 2
const calculateSumOfSquares = function (arr) {
    return arr.reduce(function (sum, num) {
        return sum + num ** 2;
    }, 0);
};

const sumOfSquares = calculateSumOfSquares(arrayNumbers);
console.log(sumOfSquares);