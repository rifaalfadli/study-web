// Make a code to add a shopping item to a shopping cart, 
// then you change your mind and remove 1 latest shopping item only. 
// Then show the shopping item list
// ver 1
// var shoppingCart = [];
// var addItem = shoppingCart.push('Tas', 'Sepatu', 'Baju', 'Celana', 'Topi', 'Kacamata');
// var deleteItem = shoppingCart.pop();
// var listItem = shoppingCart.toString();
// console.log(listItem);

// ver 2
var shoppingItem = ["PC", "Iphone"];
function addShoppingItem(...items) {
    shoppingItem.push(...items); // Menambahkan semua item sekaligus
}
function removeLastItem() {
    shoppingItem.pop(); // Menghapus item terakhir
}
function showListItem() {
    return shoppingItem.toString(); // Mengubah array jadi string
}
addShoppingItem("Laptop", "Keyboard"); // Menambahkan dua item
removeLastItem(); // Menghapus "Keyboard"
console.log(showListItem()); // Menampilkan isi array

// ver 3
// shopping cart array
let shoppingCart = [];
// function to add item
function addItem(item) {
    shoppingCart.push(item);
    console.log(`${item} added to cart.`);
}
// function to remove the latest (last) item
function removeLatestItem() {
    if (shoppingCart.length > 0) {
        let removedItem = shoppingCart.pop();
        console.log(`${removedItem} removed from cart.`);
    } else {
        console.log("Cart is already empty.");
    }
}
// function to show all items
function showCart() {
    if (shoppingCart.length === 0) {
        console.log("Cart is empty.");
    } else {
        console.log("Shopping cart:", shoppingCart.join(", "));
    }
}
// Example usage:
addItem("Apple");
addItem("Banana");
addItem("Orange");
showCart();
removeLatestItem();
showCart();           
