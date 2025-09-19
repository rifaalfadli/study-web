// You're tasked with implementing a function that calculates the total price of items in a shopping cart.
// The function should accept multiple arguments, each representing the price of an individual item,
// and return the total price after applying any discounts.
// Additionally, the function should be flexible enough to accept arrays of prices as arguments.
// ver 1 
const calculateTotalPrice = (discount = 0, ...prices) => {
    console.log(prices);
    const totalPrices = prices.reduce((sum, price) => sum + price, 0)
    console.log(totalPrices);
    const discountedPrices = prices.map(price => price * discount);
    console.log(discountedPrices);
    const totalDiscountedPrices = discountedPrices.reduce((sum, price) => sum + price, 0);
    console.log(totalDiscountedPrices);
}
calculateTotalPrice(0.5, 3, 4, 5, 6, 7, 8);

// ver 2
// Fungsi hitung total belanja
function calculateTotal(...args) {
    // Flatten argumen: kalau ada array, diubah jadi satu level
    const prices = args.flat(Infinity);
    // Hitung total
    const total = prices.reduce((sum, price) => sum + price, 0);
    return total;
}

// Fungsi dengan diskon (opsional)
function calculateTotalWithDiscount(discount = 0, ...args) {
    const prices = args.flat(Infinity);
    const total = prices.reduce((sum, price) => sum + price, 0);
    // Kalau discount <= 1 → berarti persentase (0.1 = 10%)
    // Kalau discount > 1 → berarti potongan harga nominal
    let finalTotal = total;
    if (discount > 0 && discount < 1) {
        finalTotal = total - total * discount;
    } else if (discount >= 1) {
        finalTotal = total - discount;
    }
    return finalTotal < 0 ? 0 : finalTotal; // supaya tidak minus
}

console.log(calculateTotal(10, 20, 30));           // 60
console.log(calculateTotal([5, 15, 25]));          // 45
console.log(calculateTotal(10, [20, 30], 40));     // 100

console.log(calculateTotalWithDiscount(0, 100, 200, 300));   // 600 (diskon 0%)
console.log(calculateTotalWithDiscount(0.1, 100, 200, 300));   // 540 (diskon 10%)
console.log(calculateTotalWithDiscount(50, [100, 200, 300]));  // 550 (potongan Rp50)
