// Enhanced object literals
// ver 1
const languageKeyName = 'ngaran';
const name = 'Rifa';
const person = {
    [languageKeyName]: name, // ngaran : 'Rifa'
    age: 19
}
console.log(person);

// ver 2
let propKey = 'foo';
let obj = {
    [propKey]: 'bar', // foo = 'bar'
    method() {
        return 'Hello!';
    }
};
console.log(obj);
