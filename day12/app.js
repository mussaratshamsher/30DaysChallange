"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Question 23');
//  Remove Duplicates from Sorted Array
// You are given a sorted array that may contain duplicate elements. Your task is to remove the duplicates in-place (without creating a new array) 
// and return the length of the resulting array. The array should be compressed so that the unique elements are placed first.
function removeDuplicates(nums) {
    if (nums.length === 0)
        return 0;
    let writeIndex = 1; // Start writing from the second position  
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[writeIndex] = nums[i];
            writeIndex++;
        }
    }
    return writeIndex; // Length of unique elements  
}
const arr = [1, 2, 2, 3, 4, 4, 4, 5];
const length = removeDuplicates(arr);
console.log(length); // Output: 5  
console.log(arr.slice(0, length)); // Output: [1, 2, 3, 4, 5]
console.log('Question 24');
//  Move Zeroes: You are given an array that contains some zero elements. 
// Your task is to move all the zeroes to the end of the array, while keeping the relative order of the non-zero elements unchanged.
function moveZeroes(nums) {
    let lastNonZeroIndex = 0; // Pointer for the last non-zero element  
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // Swap only if we are not at the same index  
            if (i !== lastNonZeroIndex) {
                // Swap values to maintain relative order  
                [nums[lastNonZeroIndex], nums[i]] = [nums[i], nums[lastNonZeroIndex]];
            }
            lastNonZeroIndex++;
        }
    }
}
const arr3 = [0, 0, 1, 0, 2, 3];
moveZeroes(arr3);
console.log(arr3); // Output: [1, 2, 3, 0, 0, 0]
