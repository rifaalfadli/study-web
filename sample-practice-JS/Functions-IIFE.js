// ========> IIFE <========
(function () {
    console.log("I am an IIFE!")
})();


// IIFE
(function () {
    var localvar = "IIFE Example";
    console.log(localvar);
})();
// localvar is not accessible here, preventing global scope pollution


// IIFE
var result = [];
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        result.push(i);
    }, 0);
}
console.log(result);


// IIFE
var result;
(function () {
    result = [1, 2, 3, 4];
    for (var i = 0; i < 5; i++) {
        setTimeout(function () {
            result.push(i);
        }, 0);
    }
})();
console.log(result); // This will output: undefined
