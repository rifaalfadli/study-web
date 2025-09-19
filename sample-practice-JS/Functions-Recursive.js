// ========> Recursive <========
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

let resultFactorial = factorial(5);
console.log(resultFactorial);