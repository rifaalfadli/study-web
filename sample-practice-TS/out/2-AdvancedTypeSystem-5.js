function transfers2(transaction) {
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
const transactionsInternal = {
    accountId: 123456789
};
const transactionsExternal = {
    codeBank: "BNI",
    accountName: "Rifa",
    accountNumber: "12345"
};
const results1 = transfers2(transactionsInternal);
console.log(results1);
const results2 = transfers2(transactionsExternal);
console.log(results2);
//# sourceMappingURL=2-AdvancedTypeSystem-5.js.map