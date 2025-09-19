// Mistakes and what's better
// Mistake
function addNumbers1(a, b) {
    return a + b;
}

// Better
function addNumbers2(a: number, b:number): number {
    return a + b;
}

// Mistake
function dynamicFunction1(value: any) {
    // ...
}

// Better
function dynamicFunction2(value: unknown) {
    if (typeof value === "string") {
        // Handle string case
    }
}