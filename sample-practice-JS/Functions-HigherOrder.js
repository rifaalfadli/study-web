// ========> HigherOrder Functions <========
function operate(a, b, operation) {
    return operation(a, b);
}
function add(x, y) {
    return x + y;
}
let resultAdd = operate(3, 4, add);
console.log(resultAdd);


// Higher-Order Functions
function adder(x) {
    return function (y) {
        return function (z) {
            return x + y + z;
        };
    };
}
const sum = adder(5)(10);
const total = ((adder(1))(3))(2);
console.log(sum(3));
console.log(total);


// Higher-Order Functions
function multiplier(factor) {
    return function (number) {
        return number * factor;
    };
}
const multiplyByTwo = multiplier(2);
console.log(multiplyByTwo(12));
console.log(multiplyByTwo(40));


// Higher-Order Functions
function arrayManipulator(callback) {
    const array = [1, 2, 3, 4, 5];
    return callback(array);
}
const result1 = arrayManipulator(function (arr) {
    return arr.map(function (num) {
        return num * 2;
    });
});
console.log(result1);
const result2 = arrayManipulator(function (arr) {
    return arr.filter(function (num) {
        return num % 2 === 0;
    });
});
console.log(result2);
