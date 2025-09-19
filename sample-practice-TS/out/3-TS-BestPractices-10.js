// Mistakes and what's better
// Mistake
function addNumbers1(a, b) {
    return a + b;
}
// Better
function addNumbers2(a, b) {
    return a + b;
}
// Mistake
function dynamicFunction1(value) {
    // ...
}
// Better
function dynamicFunction2(value) {
    if (typeof value === "string") {
        // Handle string case
    }
}
//# sourceMappingURL=3-TS-BestPractices-10.js.map