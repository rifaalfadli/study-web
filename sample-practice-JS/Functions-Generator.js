// ========> Generator Functions <========
function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}
const generator = generateSequence();
console.log(generator.next().value); // Output: 1
console.log(generator.next().value); // Output: 2