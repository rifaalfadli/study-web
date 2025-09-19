// sample practice
interface Transaction {
    amount: number;
    accountName: string;
}

function transfers1<Type>(transaction: Type): Type {
    try {
        console.log('Doing transfer');
    } catch (error) {
        console.error('Transfer gagal');   
    } finally {
        return transaction;
    }
}

const transaction: Transaction = {amount: 20, accountName: "John"};
const result = transfers1<Transaction>(transaction);
console.log((result));