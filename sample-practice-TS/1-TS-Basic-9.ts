// make a function to checkout a shopping
// delivery fee can be free
// parameter 1 array of object items
// items item name, quantity, price
// parameter 2 delivery fee
// return total price (optional)
function checkoutItems(shoppingCart: Array<number>, deliveryFee?: number): number {
    let sum: number = 0;

    // jumlahkan semua item
    shoppingCart.forEach(num => sum += num);

    // jika ada biaya kirim, tambahkan
    if (deliveryFee !== undefined) {
        sum += deliveryFee;
    }

    return sum;
}

console.log(checkoutItems([10, 20, 30]));        // 60
console.log(checkoutItems([10, 20, 30], 15));    // 75