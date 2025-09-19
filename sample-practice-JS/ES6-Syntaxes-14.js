// Generators
function* generatorNumbers() {
    yield `1`
    yield `2`
    yield `3`
}

const generator = generatorNumbers();
console.log(generator.next().value); // Output: 1
console.log(generator.next().value); // Output: 2
// console.log(generator.next().value); // Output: 3