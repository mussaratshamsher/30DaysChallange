"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Question 21');
//  Merge Two Sorted Arrays
// Write a function mergeSortedArrays that takes two sorted arrays of numbers and returns a single sorted array by merging them. 
// You cannot use any built-in sort function.
function mergeSortedArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
// Example Usage:
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
console.log(mergeSortedArrays(arr1, arr2));
console.log('Question 22 ');
// Find the First Non-Repeated Character
// Write a function firstNonRepeatedCharacter that takes a string and returns the first character that does not repeat. 
// If all characters repeat, return an empty string.
function firstNonRepeatedCharacter(s) {
    for (let i = 0; i < s.length; i++) {
        // Check if the character appears only once  
        if (s.indexOf(s[i]) === i && s.lastIndexOf(s[i]) === i) {
            return s[i]; // Return the first non-repeated character  
        }
    }
    return ''; // Returns an empty string if no non-repeated character is found  
}
// Example usage:  
console.log(firstNonRepeatedCharacter("swiss")); // Output: "w"  
console.log(firstNonRepeatedCharacter("racecar")); // Output: "e"  
console.log(firstNonRepeatedCharacter("aabbcc")); // Output: ""  
