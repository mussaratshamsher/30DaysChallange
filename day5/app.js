"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Question1');
// Create a function in TypeScript that takes two arrays of numbers as input. The function should perform the following operations based on the conditions given:
// If the lengths of both arrays are the same and all elements are the same:
// Merge both arrays into one array.
// Multiply corresponding elements of both arrays to create a new array.
// If the lengths of both arrays are different:
// Merge both arrays into one array.
// Return the middle element of the merged array.
// If the lengths of both arrays are the same but elements are different:
// Make the elements of both arrays the same by adding corresponding elements.
// Merge the arrays and add corresponding elements of the resulting array.
function processArrays(array1, array2) {
    if (array1.length === array2.length) {
        const allElementsSame = array1.every((val, index) => val === array2[index]);
        if (allElementsSame) {
            // Condition 1: Lengths are the same and all elements are the same  
            const multipliedArray = array1.map((val, index) => val * array2[index]);
            return multipliedArray;
            ; // Merge both arrays  
        }
        else {
            // Condition 2: Lengths are the same but elements are different  
            const summedArray = array1.map((val, index) => val + array2[index]);
            return summedArray; // Return the summed corresponding elements  
        }
    }
    else {
        // Condition 3: Lengths are different  
        const mergedArray = [...array1, ...array2];
        const middleIndex = Math.floor(mergedArray.length / 2);
        return mergedArray[middleIndex]; // Return the middle element of the merged array  
    }
}
console.log(processArrays([1, 2, 4], [1, 2, 4])); // Merge arrays: [1, 4, 16]  
console.log(processArrays([1, 2, 3], [4, 5, 6])); // Sum: [5, 7, 9]  
console.log(processArrays([1, 2], [3, 4, 5])); // Return middle of merged: 3  
console.log('Question2');
// Question 2: Extract First Letters from String Array
// Create a function in TypeScript that takes an array of strings (names) as input. The function should return a new array containing 
//the first letter of each name.
function getFirstLetters(...names) {
    const firstLetters = [];
    for (let i = 0; i < names.length; i++) {
        if (names[i].length > 0) {
            const firstLetter = names[i][0]; // Get the first character  
            firstLetters.push(firstLetter);
        }
    }
    return firstLetters;
}
console.log(getFirstLetters('Ali', 'Rehman', 'Mona', 'Aiman', 'Nisar'));
