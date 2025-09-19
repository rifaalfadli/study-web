// Function Optional Parameters
// sample 1
function tambahv1(a: number, b: number, c?: number): number {
    if (!c) {
        return a + b + c;
    }
    return a + b;
}
console.log(tambahv1(1,3,0));

// sample 2
function tambahv2(a: number, b: number, c: number = 0): number {
        return a + b + c;
}
console.log(tambahv2(100,200));