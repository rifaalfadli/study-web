// Functions
function add(a:number, b:number): number {
    return a + b;
}
console.log(add(3,3));

// jika parameter tidak di beri type data maka akan di buat jadi type data any
function transfer(balance: number, amountToTransfer: number): number {
    return balance-amountToTransfer;
}
console.log(transfer(5000,1000));

// sample practice
function isEven(num: number): boolean {
    return num % 2 === 0;
}
console.log(isEven(20));
