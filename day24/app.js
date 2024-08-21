"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Question 47:');
//  Generate Fibonacci Sequence
// Write a function generateFibonacci(n: number): number[] that generates and returns the first n numbers of the Fibonacci sequence. 
//The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two.
function generateFibonacci(n) {
    if (n <= 0)
        return [];
    if (n === 1)
        return [0];
    const fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    return fibonacci;
}
console.log(generateFibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]  
console.log(generateFibonacci(5)); // Output: [0, 1, 1, 2, 3]  
console.log(generateFibonacci(0)); // Output: []
console.log('Question 48:');
//  Replace Vowels with Asterisks
// Write a function replaceVowels(str: string): string that takes a string str and returns a new string where all vowels (a, e, i, o, u) 
// are replaced with asterisks (*). The function should be case-insensitive.
function replaceVowels(str) {
    return str.replace(/[aeioUAEIOU]/g, '*'); //replaces all vowels with * 
}
console.log(replaceVowels("Hello World"));
console.log(replaceVowels("Time is too short to Learn CSS!"));
