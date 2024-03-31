// Import the prompt-sync module to get user input
const prompt = require("prompt-sync")({ sigint: true });

// Function to generate an array of numbers between two given numbers
function generateArray(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

// Get user input for start and end numbers
const firstNumber = parseInt(prompt('Enter first number: '));
const lastNumber = parseInt(prompt('Enter last number: '));

// Generate and display the array
const resultArray = generateArray(firstNumber, lastNumber);
console.log('Output:', resultArray);
