// Build a simple calculator using JavaScript.

function calculate() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const opr = document.getElementById("opr").value;

  const result = document.getElementById("result");

  if (opr == "+") {
    result.innerText = num1 + num2;
  } else if (opr == "-") {
    result.innerText = num1 - num2;
  } else if (opr == "*") {
    result.innerText = num1 * num2;
  } else if(opr == "/" && num2 == 0){
    result.innerText = "Cannot divide by Zero!";
  } else if (opr == "/") {
    result.innerText = num1 / num2;
  } else {
    result.innerText = "Error";
  }
}
