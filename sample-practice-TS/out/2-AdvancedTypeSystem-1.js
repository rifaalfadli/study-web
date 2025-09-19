const john = {
    name: 'John',
    age: 20,
    greeting: "Hello My name is John"
};
const rifa = {
    name: 'Rifa',
    age: 19,
    greeting: "Hello My name is Rifa"
};
function personGreeting(person) {
    console.log(person.greeting);
}
personGreeting(rifa);
personGreeting({
    name: 'John',
    age: 20,
    greeting: "Hello My name is John"
});
//# sourceMappingURL=2-AdvancedTypeSystem-1.js.map