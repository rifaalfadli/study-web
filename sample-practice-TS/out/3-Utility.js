const partialUser = {
    name: 'Rifa'
};
console.log(partialUser);
const carInfo = {
    make: 'Toyota', model: 'Camry'
};
console.log(carInfo);
const discountedProduct = { id: 1 };
console.log(discountedProduct);
const personRifa = {
    name: "Rifa",
    age: 19
};
console.log(personRifa);
const point = { x: 10, y: 20 };
console.log(point);
const numberValue = 42;
console.log(numberValue);
// bikin transaksi
const transactionss = {
    timestamp: "05-06-2025",
    amount: 500000,
    accountNumber: 123456
};
// bikin transaksi
const transferFee = {
    timestamp: "15-08-2025",
    amount: 6500
};
// function for viewTransactionHistory
function viewTransactionHistory(transaction) {
    console.log(transaction);
}
// panggil fungsi untuk transactionss
viewTransactionHistory(transactionss);
// panggil fungsi untuk transfer fee
viewTransactionHistory(transferFee);
//# sourceMappingURL=3-Utility.js.map