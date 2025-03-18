// JavaScript Core

// Syntax

console.log("Hello, World!");

// Variables

var x = 10;
let y = "Hello";
const z = true;

// Data Types

// Primitive Data Types

let num = 10; // Number
let str = "Hello"; // String
let bool = true; // Boolean

let undef; // Undefined
let nul = null; // Null

let sym = Symbol(); // Symbol - ES6
let bigint = 10n; // BigInt - ES11

// Non-Primitive Data Types

const obj = { key: "value" }; // Object

const arr = [1, 2, 3]; // Array

function greet() { return "Hello"; } // Function

// Operators

// Arithmetic Operators

console.log(5 + 6); // Addition
console.log(5 - 6); // Subtraction
console.log(5 * 6); // Multiplication
console.log(5 / 6); // Division
console.log(5 % 6); // Modulus
console.log(5 ** 6); // Exponentiation
console.log(x++); // Increment
console.log(x--); // Decrement

// Assignment Operators

x = 10; // assign operator
x += 5; // x = x + 5
x -= 5; // x = x - 5
x *= 5; // x = x * 5
x /= 5; // x = x / 5
x %= 5; // x = x % 5
x **= 5; // x = x ** 5

// Comparison Operators

console.log(5 == 6); // Equal to
console.log(5 === 6); // Strict equal to
console.log(5 != 6); // Not equal to
console.log(5 !== 6); // Strict not equal to
console.log(5 > 6); // Greater than
console.log(5 < 6); // Less than
console.log(5 >= 6); // Greater than or equal to
console.log(5 <= 6); // Less than or equal to

// Logical Operators

console.log(true && false); // Logical AND
console.log(true || false); // Logical OR
console.log(!true); // Logical NOT

// Type Operators

console.log(typeof "hello"); // Type of
console.log(5 instanceof Number); // Instance of

// Ternaary Operator

let terOpr = (x > 10) ? "Greater" : "Smaller";
console.log(terOpr);