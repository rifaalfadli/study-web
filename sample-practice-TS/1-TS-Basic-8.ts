// Function Rest Parameters
function totalNum(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}
console.log(totalNum());               // 0
console.log(totalNum(10, 20));         // 30
console.log(totalNum(10, 20, 30));     // 60