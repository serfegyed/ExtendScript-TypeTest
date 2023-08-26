
// Test cases
console.log(isIterable([1, 2, 3])); // true
console.log(isIterable("hello"));   // true
console.log(isIterable(new Map())); // true
console.log(isIterable(new Set())); // true
console.log(isIterable(42));        // false
console.log(isIterable(null));      // false
console.log(isIterable(undefined)); // false