// ========> Closures <========
// function outer() {
//     let count = 0;
//     return function () {
//         count++;
//         console.log(count);
//     }
// }
// const closureFunction1 = outer();
// closureFunction1();
// closureFunction1();
// closureFunction1();


// Closures
function createCounter() {
    var count = 0;
    return function () {
        return ++count;
    };
}
var counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());


// Closures
// function outer() {
//     let outerVar = "I am outside!";
//     function inner() {
//         var innerVar = "I am inside!";
//         console.log(outerVar);
//         console.log(innerVar);
//     }
//     return inner;
// }
// let closureFunction2 = outer();
// closureFunction2();
// closureFunction2();
