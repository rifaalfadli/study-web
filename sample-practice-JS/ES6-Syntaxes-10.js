// You're developing a wishlist feature for an e-commerce website. Implement a JavaScript function that adds products to the wishlist.
// The function should accept an object representing the product details and an optional quantity parameter. If no quantity is provided, default it to 1.
// Additionally, the function should enhance the product object with additional properties like a unique ID and a timestamp.
const addToWishlist = (product, quantity = 1) => {
    const id = Math.floor(Math.random() * 1000000);
    const timestamp = Date.now();
    const enhancedProduct = {
        id, timestamp, ...product, quantity
    };
    console.log("Added to wishlist:", enhancedProduct);
};

// Test case
const product = { name: "Smartphone", price: 799 };
addToWishlist(product);
addToWishlist(product, 5);


