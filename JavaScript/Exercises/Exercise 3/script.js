// Write a program that checks if a number is even or odd.

alert("Welcome to the Odd or Even Number Checker!");

const userInput = () => {
  const input = prompt("Enter a number:");

  if (input === null || input.trim() === "") {
    alert("Please enter a number!");
    return userInput();
  }
  if (isNaN(input)) {
    alert("You have not entered a valid number!");
    return userInput();
  }
  const num = Number(input);
  if (num < 0) {
    alert("Negative numbers are not allowed!");
    return userInput();
  }
  alert(`The number is ${num % 2 === 0 ? "Even" : "Odd"}!`);

  if (confirm("Do you want to check another number?")) {
    userInput();
  } else {
    alert("Thanks for using the Odd or Even Number Checker!");
  }
};

userInput();