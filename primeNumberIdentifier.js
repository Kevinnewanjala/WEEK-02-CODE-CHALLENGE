// Import the prompt-sync module to get user input
const prompt = require("prompt-sync")({ sigint: true });

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to filter out prime numbers from an array
function filterPrimeNumbers(inputArray) {
    return inputArray.filter(num => isPrime(num));
}

// Get user input for the array of numbers
const input = prompt('Enter an array of numbers (separate using comma): ');
const inputArray = input.split(',').map(num => parseInt(num.trim()));

// Filter prime numbers from the input array
const primeNumbersArray = filterPrimeNumbers(inputArray);

// Display the output array containing only prime numbers
console.log('Prime Numbers:', primeNumbersArray);