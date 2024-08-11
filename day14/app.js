"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Question 27');
// Create a function findMaxSum that accepts two arrays of numbers.The function should determine the maximum number from each array and
// return the sum of these two maximum numbers.
function findMaxSum(arr1, arr2) {
    const max1 = Math.max(...arr1);
    const max2 = Math.max(...arr2);
    return max1 + max2;
}
const result = findMaxSum([1, 2, 3], [4, 5, 6]);
console.log(result); // Output: 9 (3 + 6)  
console.log('Question 28');
//Write a function is Palindrome that takes a string as input & checks if it reads the same backward as forward.The function should return
//true if the stirng is a palindrome & false otherwise.
function isPalindromeTwoPointer(input) {
    const string = input.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    let left = 0;
    let right = string.length - 1;
    while (left < right) {
        if (string[left] !== string[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(isPalindromeTwoPointer("Was it a car or a cat I saw?")); // true  
console.log(isPalindromeTwoPointer("Was it a car?")); // false  
