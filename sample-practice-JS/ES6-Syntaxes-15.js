// You're working on a feature for a banking application that processes transactions.
// Implement a generator function that simulates transaction processing by yielding each step of the process.
// The function should accept an initial balance and a transaction amount, and yield each step of the transaction process,
// Processes: checking if the balance is sufficient, deducting the transaction amount, and updating the balance
// (only string, not literally do the process)
function* processTransaction(initialBalance, transactionAmount) {
    // Check if the balance is sufficient
    yield `Checking if the balance of ${initialBalance} is sufficient for the transaction...`;

    if (initialBalance >= transactionAmount) {
        // Deduct the transaction amount
        yield `Deducting ${transactionAmount} from the account...`;
        initialBalance -= transactionAmount;
        // Update the balance 
        yield `Transaction successfull. Updated balance: ${initialBalance}`;
    } else {
        yield `Transaction failed. Insufficient balance`
    }
}

// Usage
const transactionSteps = processTransaction(1000, 500);

// Iterate thtrough each step of the transaction process
for (const step of transactionSteps) {
    console.log(step);
}