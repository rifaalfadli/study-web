// sample practice
interface TransactionInternal {
    accountId: number;
}

interface TransactionExternal {
    codeBank: string;
    accountName: string;
    accountNumber: string;
}

type Transactions = TransactionInternal | TransactionExternal;
function transfers2<Type>(transaction: Type): Type {
    try {
        console.log('Doing transfer');
    } catch (error) {
        console.error('Transfer gagal');
    } finally {
        return transaction;
    }
}

const transactionsInternal: Transactions = {
    accountId: 123456789
}

const transactionsExternal: Transactions = {
    codeBank:"BNI", 
    accountName: "Rifa", 
    accountNumber: "12345"
}

const results1 = transfers2<Transactions>(transactionsInternal);
console.log(results1);
const results2 = transfers2<Transactions>(transactionsExternal);
console.log(results2);