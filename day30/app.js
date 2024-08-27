"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Question 59: ');
// Convert Number to Words
// Write a TypeScript function that takes a number between 0 and 99 and returns the number in words. For example, if the input is 45, 
// the output should be "Forty-Five".
function numberToWords(num) {
    if (num < 0 || num > 99) {
        throw new Error("Input must be between 0 and 99.");
    }
    const singleDigits = [
        "Zero", "One", "Two", "Three", "Four",
        "Five", "Six", "Seven", "Eight", "Nine"
    ];
    const teens = [
        "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen",
        "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
    ];
    const tens = [
        "", "", "Twenty", "Thirty", "Forty",
        "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
    ];
    if (num < 10) {
        return singleDigits[num];
    }
    else if (num < 20) {
        return teens[num - 10];
    }
    else {
        return `${tens[Math.floor(num / 10)]}-${num % 10 === 0 ? '' : singleDigits[num % 10]}`.replace(/-$/, '');
    }
}
console.log(numberToWords(45)); // Outputs: "Forty-Five"
console.log('Question 60:');
//  Calculate the Sum of the First n Natural Numbers
// Write a TypeScript function that takes a positive integer n and returns the sum of the first n natural numbers. For example, if n = 5, 
// the output should be 15 (because 1 + 2 + 3 + 4 + 5 = 15).
function sumOfNaturalNums(n) {
    if (n <= 0) {
        throw new Error("Input must be positive integer.");
    }
    if (n === 1) {
        return 1; // Base case  
    }
    return n + sumOfNaturalNums(n - 1); // Recursive case  
}
console.log(sumOfNaturalNums(5)); // Outputs: 15
