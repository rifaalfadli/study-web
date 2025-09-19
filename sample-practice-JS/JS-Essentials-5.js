// There is a restaurant named krusty krab, with a special recipe called Krabby Patty
// it has ingredients of bread, tomatoes, beef, and plankton :D
// the recipe is delicious if there are more than 500 purchase per day
// with repeat employee of the month, name: Spongebob, age: 12,
// where you can get this information by calling get Employee0f TheMonth() function.
const restaurant = {
  name: "Krusty Krab",
  specialRecipe: "Krabby Patty",
  ingredients: ["bread", "tomatoes", "beef", "plankton"],
  isDelicious(purchase) {
    return purchase > 500;
  },
  getEmployeeOfTheMonth() {
    return {
      name: "Spongebob",
      age: 12
    };
  }
};

console.log(restaurant.name); // Krusty Krab
console.log(restaurant.ingredients); // ["bread", "tomatoes", "beef", "plankton"]
console.log(restaurant.isDelicious(600)); // true
console.log(restaurant.getEmployeeOfTheMonth()); // { name: "Spongebob", age: 12 }

