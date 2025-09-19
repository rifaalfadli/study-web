// Build a code to define shopping cart that has many items where each item has name and price, then 
// Wrap the shopping cart with payment information such as payment provider, total price, as an object.
const shoppingCart = {
  items: [
    { name: "Laptop", price: 7500000 },
    { name: "Mouse", price: 150000 },
    { name: "Keyboard", price: 350000 }
  ],
  payment: {
    provider: "GoPay",
    totalPrice: 7500000 + 150000 + 350000
  }
};

console.log(shoppingCart);
