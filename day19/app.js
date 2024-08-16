"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Question 37:');
//  Find the Maximum Difference :
//   Given an array of integers, find the maximum difference between any two elements in the array.
//   The difference should be calculated as difference = arr[j] - arr[i] where j > i.
function maxDifference(arr) {
    let maxDiff = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const diff = arr[j] - arr[i];
            if (diff > maxDiff) {
                maxDiff = diff;
            }
        }
    }
    return maxDiff === Number.NEGATIVE_INFINITY ? 0 : maxDiff; // Return 0 if no pair found  
}
const arr1 = [2, 3, 10, 6, 4, 8, 1];
console.log(maxDifference(arr1)); // Output: 8 (10-2)
console.log(' Question 38:');
//  String Character Frequency :
//Write a function that takes a string as input and returns an object where the keys are characters and the values are the frequency of those characters in the string.
function characterFrequency(str) {
    const frequency = {};
    for (const char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
    return frequency;
}
console.log(characterFrequency("hello world"));
