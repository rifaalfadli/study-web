// Function Rest Parameters
function totalNum(...numbers) {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}
console.log(totalNum()); // 0
console.log(totalNum(10, 20)); // 30
console.log(totalNum(10, 20, 30)); // 60
//# sourceMappingURL=1-TS-Basic-8.js.map