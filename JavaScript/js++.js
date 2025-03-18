// Bitwise Operators

console.log(5 & 6); // Bitwise AND
console.log(5 | 6); // Bitwise OR
console.log(5 ^ 6); // Bitwise XOR
console.log(~5); // Bitwise NOT
console.log(5 << 6); // Bitwise Left Shift
console.log(5 >> 6); // Bitwise Right Shift
console.log(5 >>> 6); // Bitwise Unsigned Right Shift

// Ternary Operator (?:)
// Shorter way to write an if-else condition.

let age = 18;
let result1 = (age >= 18) ? "Adult" : "Minor";
console.log(result1); // "Adult"

// Spread & Rest Operators (...)

// Spread (...) - Expands an array or object.
let nums = [1, 2, 3];
let moreNums = [...nums, 4, 5]; // [1, 2, 3, 4, 5]

// Rest (...) - Gathers remaining arguments into an array.
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// Nullish Coalescing (??)
// Returns the right-hand value only if the left-hand value is null or undefined.

let value = null;
let result2 = value ?? "Default Value"; 
console.log(result2); // "Default Value"

// Optional Chaining (?.)
// Prevents errors when accessing properties that might be null or undefined.


let user = { profile: { name: "Vatsal" } };
console.log(user.profile?.name);  // "Vatsal"
console.log(user.address?.city);  // undefined (No error)
