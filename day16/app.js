"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Question: 31');
// Sum of Even Numbers from Multiple Arrays:
// You are given three arrays of integers. Write a function sumEvenNumbers(arr1: number[], arr2: number[], arr3: number[]): number[] 
// that calculates the sum of all even numbers in each array. The function should return a new array containing the sum of even numbers 
// from each of the three arrays.
function sumEvenNumbers(arr1, arr2, arr3) {
    const sumArray = (arr) => {
        let sum = 0;
        for (let num of arr) {
            if (num % 2 === 0) {
                sum += num;
            }
        }
        return sum;
    };
    return [sumArray(arr1), sumArray(arr2), sumArray(arr3)];
}
console.log(sumEvenNumbers([1, 2, 3, 4], [4, 5, 6], [7, 8, 9])); //Output: [6, 10, 8]
console.log('Question:32');
// Concatenate Strings from Arrays:
// You are given three arrays of strings. Write a function concatenateFirstLetters(arr1: string[], arr2: string[], arr3: string[]): string[] that 
// extracts the first letter of each string in the arrays, concatenates these letters for each array, and returns a new array containing the concatenated strings.
function concatenateFirstLetters(arr1, arr2, arr3) {
    const arrays = [arr1, arr2, arr3];
    return arrays.map(arr => arr.flatMap(str => str[0]).join(''));
}
// Example usage:  
console.log(concatenateFirstLetters(["apple", "banana"], ["cat", "anaconda", "turtle"], ["elephant", "larva", "frog"])); // Output: ["ab", "cat", "elf"]
