// Write a higher-order function filter And Transform that takes an array and two callback functions as arguments. 
// The function should filter the array based on the first callback and transform the filtered elements using the second callback.
const numbers = [1, 2, 3, 4, 5, 6];
const isEven = (num) => num % 2 === 0;
const square = (num) => num * num;

function fileterAndTransform(arr, filterCallback, transformCallback) {
    return arr.filter(filterCallback).map(transformCallback);
}

const result = fileterAndTransform(numbers, isEven, square);
console.log(result);