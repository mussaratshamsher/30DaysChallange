"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Question 25: ');
//  Count Vowels in a String
// Write a function in TypeScript that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
function countVowelsForOf(input) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (const char of input) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowelsForOf("Alina")); //output:3
console.log(countVowelsForOf("TypeScript is fun to learn!"));
//Output:7
console.log('Question 26: ');
// Find the Missing Number in an Array 
// Write a function in TypeScript that takes an array of numbers containing n distinct numbers taken from the range 1 to n+1, 
//where one number is missing. The function should find and return the missing number.
function findMissingNumber(arr) {
    const n = arr.length + 1; // one number is missing  
    const totalSum = (n * (n + 1)) / 2; // Sum of the first n natural numbers  
    const currentSum = arr.reduce((acc, num) => acc + num, 0); // Sum of the current numbers in the array  
    return totalSum - currentSum; // The missing number  
}
const numbers = [1, 2, 4, 5]; // Here, 3 is the missing number  
console.log(findMissingNumber(numbers)); // Output: 3
