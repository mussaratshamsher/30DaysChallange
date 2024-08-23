"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Question 51:');
// Reverse a Number
// Write a function reverseNumber(n: number): number that takes a positive integer n and returns the number with its digits reversed.
function reverseNumber(n) {
    const reversed = Number(n.toString().split('').reverse().join(''));
    return reversed;
}
// Example usage:  
console.log(reverseNumber(12345)); // Output: 54321  
console.log('Question 52:');
//  Find the Average of Numbers in a String
// Write a function averageOfNumbersInString(str: string): number that extracts all numbers from a given string, calculates their average, and returns the result.
function averageOfNumbersInString(str) {
    const numbers = str.match(/\d+/g);
    if (!numbers)
        return 0; // Return 0 if no numbers found  
    const sum = numbers.reduce((acc, num) => acc + Number(num), 0);
    return sum / numbers.length; //returns average of numbers in string
}
console.log(averageOfNumbersInString("The temperatures are 23, 25, and 30 degrees.")); // Output: 26
