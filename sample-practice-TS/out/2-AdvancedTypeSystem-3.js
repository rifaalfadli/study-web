function transfers1(transaction) {
    try {
        console.log('Doing transfer');
    }
    catch (error) {
        console.error('Transfer gagal');
    }
    finally {
        return transaction;
    }
}
const transaction = { amount: 20, accountName: "John" };
const result = transfers1(transaction);
console.log((result));
//# sourceMappingURL=2-AdvancedTypeSystem-3.js.map