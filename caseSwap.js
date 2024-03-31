// Import the prompt-sync module to get user input
const prompt = require("prompt-sync")({ sigint: true });

// Function to swap the case of each character in a string
function swapCase(inputString) {
    return inputString.split('').map(function(char) {
         // Check if the character is uppercase, then convert to lowercase
        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        } else {
             // Convert the character to uppercase
            return char.toUpperCase();
        }
    }).join('');
}

// Obtain User Input
const inputString = prompt('Enter a string: ');
// Call the swapCase function and display output
const outputString = swapCase(inputString);

// Display the output 
console.log('Output:', outputString);