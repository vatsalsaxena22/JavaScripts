// Get the form and result elements
const factorialForm = document.getElementById('factorialForm');
const resultSpan = document.getElementById('result');

// Add event listener for form submission
factorialForm.addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    // Get the input value
    const num = parseInt(document.getElementById('numInput').value);
    
    // Validate input
    if (isNaN(num)) {
        resultSpan.textContent = "Please enter a valid number";
        return;
    }
    
    if (num < 0) {
        resultSpan.textContent = "Factorial is not defined for negative numbers";
        return;
    }
    
    if (num > 100) {
        resultSpan.textContent = "Number too large, please enter a number up to 100";
        return;
    }
    
    // Calculate factorial
    const factorial = calculateFactorial(num);
    
    // Display the result
    resultSpan.textContent = factorial;
});

// Function to calculate factorial
function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    
    // Handle large numbers
    if (n > 20) {
        // For very large numbers, use scientific notation
        let result = BigInt(1);
        for (let i = 2n; i <= BigInt(n); i++) {
            result *= i;
        }
        return result.toString();
    } else {
        // Regular factorial calculation for smaller numbers
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}