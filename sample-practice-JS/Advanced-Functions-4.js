// Write a function that finds the maximum value in an array using the reduce function and an anonymous function.
const values = [7, 2, 9, 4, 1];

const findMaxValue = function (arr) {
    return arr.reduce(function (max, current) {
        return current > max ? current : max;
    }, arr[0]);
};

const maxValue = findMaxValue(values);
console.log(maxValue);
