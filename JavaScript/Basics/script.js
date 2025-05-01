// JavaScript Core

// Syntax

console.log("Hello, World!");

// This is a comment

/*
this is
a multi-line 
comment
*/

// Variables

{
  var x = 10;
  let y = "Hello";
  const z = true;
}

// Data Types

// Primitive Data Types

{
  let num = 10; // Number
  let str = "Hello"; // String
  let bool = true; // Boolean

  let undef; // Undefined
  let nul = null; // Null

  let sym = Symbol(); // Symbol - ES6
  let bigint = 10n; // BigInt - ES11
}

// Non-Primitive Data Types

{
  const obj = { key: "value" }; // Object

  const arr = [1, 2, 3]; // Array
  
  function greet() {
    return "Hello";
  } // Function
}

// Operators

// Arithmetic Operators

{
  console.log(5 + 6); // Addition
  console.log(5 - 6); // Subtraction
  console.log(5 * 6); // Multiplication
  console.log(5 / 6); // Division
  console.log(5 % 6); // Modulus
  console.log(5 ** 6); // Exponentiation
  console.log(x++); // Increment
  console.log(x--); // Decrement
}

// Assignment Operators

{
  x = 10; // assign operator
  x += 5; // x = x + 5
  x -= 5; // x = x - 5
  x *= 5; // x = x * 5
  x /= 5; // x = x / 5
  x %= 5; // x = x % 5
  x **= 5; // x = x ** 5
}

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

// Ternary Operator

{
  let terOpr = x > 10 ? "Greater" : "Smaller";
  console.log(terOpr);
}

// If Else Statements

// If

if (100 > 10) {
  console.log("Greater");
}

// If Else

if (1 > 10) {
  console.log("Greater");
} else {
  console.log("Smaller");
}

// Else If

if (10 > 10) {
  console.log("Greater");
} else if (10 < 10) {
  console.log("Smaller");
} else {
  console.log("Equal");
}

// Switch Case Statements

let swi = 10;
switch (swi) {
  case 0:
    console.log("Zero");
    break;
  case 5:
    console.log("Five");
    break;
  case 10:
    console.log("Ten");
    break;
  default:
    console.log("Other");
}

// Loops

// While Loop

let whi = 0;
while (whi < 5) {
  console.log(whi);
  whi++;
}

// Do While Loop

let dow = 0;
do {
  console.log(dow);
  dow++;
} while (dow < 5);

// For Loop

let loopArray = ["apple", "banana", "cherry", "grapes", "mango"];
for (let index = 0; index < loopArray.length; index++) {
  const element = loopArray[index];
  console.log(element);
}

// For In

{
  const person = {
    fullName: "John",
    lastName: "Doe",
    age: 25,
  };

  let text = "";

  for (let x in person) {
    text += person[x] + " ";
    console.log(text);
  }
}

// For In - Array

{
  let arr = [1, 2, 3, 4, 5];

  for (let x in arr) {
    console.log(arr[x]);
  }
}

// For Of

{
  let x = "JavaScript";

  for (const i of x) {
    console.log(i);
  }
}

// Functions

// Syntax
{
  function myFunction(p1, p2) {
    return p1 * p2;
  }
}

// Example - Add of two numbers

{
  function addFun(no1, no2) {
    return no1 + no2;
  }

  console.log(addFun(12, 13));
}

// Arrow Function

{
  let myFunction = () => {
    console.log("Arrow");
  };

  myFunction();

  // Arrow Function with parameters

  let addFun = (a, b) => {
    console.log(a + b);
  };

  addFun(12, 13);
}

// Function Parameters & Default Parameters

{
  // Function Parameters
  function greet1(name) {
    console.log("Hello " + name);
  }

  greet1("Vatsal");
  greet1();

  // Default Parameters
  function greet2(name = "Guest") {
    console.log("Hello " + name);
  }

  greet2("Vatsal");
  greet2();
}

// Higher-Order Function

{
  // Function as an Argument
  function greet(name, callbackFun) {
    console.log("hello " + name);
    callbackFun();
  }

  function saybye() {
    console.log("bye bye");
  }

  greet("vatsal", saybye);

  // Function returning Another Function
  function multiplier(factor) {
    return function (number) {
      return number * factor;
    };
  }

  let multiple = multiplier(12);

  console.log(multiple(12));
}

// Scope

// Block Scope

{
  let blockScope = "hello";

  console.log(blockScope);
}
// console.log(blockScope) // give error

// Local or Function Scope

let funcScope = () => {
  let thisScope = 12;

  console.log(thisScope);
};
funcScope();
// console.log(thisScope); // give error

// Global Scope
let globalScope = true;

console.log(globalScope);

// Hoisting

// function
{
  sayHello(); // work fine

  function sayHello() {
    console.log("hello");
  }
}
// Variable
{
  // var
  console.log(hx); // undefined
  var hx = 10;
  console.log(hx);

  // let & const

  // console.log(hy1); // give error
  // console.log(hy2); // give error
  let hy1 = 1;
  const hy2 = 1;
  console.log(hy1);
  console.log(hy2);
}