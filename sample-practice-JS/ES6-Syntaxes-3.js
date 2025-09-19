// Destructuring Assignment
const numbers = [1, 2, 3];
// Use destrucing to assign variables a, b, and c
const [a, b, c] = numbers;
// code di atas sama saja seperti ini:
// const a = numbers[0];
// const b = numbers[1];
// const c = numbers[2];
console.log(a, b, c);


const person = {
    cid: '123',
    name: 'Rifa',
    age: 19,
    identity: {
        type: 'KTP'
    }
};
// Use destructuring to assign variables name and age
const { cid: customerID, name, age, identity: { type } } = person;
console.log(name);
console.log(type);
console.log(customerID);





