"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Question 53:');
// Count the Number of Divisors
// Write a TypeScript function that takes a positive integer as input and returns the number of its divisors (factors). 
//A divisor is a number that divides the input number without leaving a remainder.
function countDivisors(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    return count;
}
console.log(countDivisors(12)); // Output: 6
console.log(countDivisors(16)); //Output: 
console.log('Question 54:');
// Check if a Number is a Perfect Square
// Write a TypeScript function that takes a positive integer as input and returns true if the number is a perfect square,
// otherwise return false. A perfect square is a number that is the square of an integer.
function isPerfectSquare(n) {
    if (n < 0)
        return false; // Negative numbers cannot be perfect squares  
    const root = Math.sqrt(n);
    return root * root === n;
}
console.log(isPerfectSquare(36)); // Output: true  
console.log(isPerfectSquare(37)); // Output: false  
