// For an Shopping cart, create a module where it can search an array and return the result in another module, you 
// can use console.log to tell if the item is exist or not. 
// Function isExist(itemList, targetItem)
// ver 1
function isExist(itemList, targetItem) {
    if (itemList.includes(targetItem)) {
        console.log(`${targetItem} exists in the shopping cart.`);
        return true;
    } else {
        console.log(`${targetItem} does not exist in the shopping cart.`);
        return false;
    }
}

// ver 2
function isExist(itemList, targetItem) {
    for (var index = 0; index < itemList.length; index++) {
        if (itemList[index] === targetItem) {
            return targetItem + " found! At index " + index;
        }
    }
    return "Item not found."
}

module.exports = { isExist };

