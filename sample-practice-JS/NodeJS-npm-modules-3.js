// For an Shopping cart, create a module where it can search an array and return the result in another module, you 
// can use console.log to tell if the item is exist or not. 
// Function isExist(itemList, targetItem)

var { isExist } = require("./NodeJS-npm-modules-3(function)");

var shoppingCart = ["PC", "Handphone", "Keyboard", "Monitor"];


console.log(isExist(shoppingCart, "Monitor"));
console.log(isExist(shoppingCart, "Grapes"));
