// Function Optional Parameters
// sample 1
function tambahv1(a, b, c) {
    if (!c) {
        return a + b + c;
    }
    return a + b;
}
console.log(tambahv1(1, 3, 0));
// sample 2
function tambahv2(a, b, c = 0) {
    return a + b + c;
}
console.log(tambahv2(100, 200));
//# sourceMappingURL=1-TS-Basic-7.js.map