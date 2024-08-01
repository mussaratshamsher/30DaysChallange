"use strict";
// Question 7: Find Duplicate Numbers in an Array
// Write a TypeScript function that takes an array of numbers as input and returns a new array containing only the 
//duplicate numbers from the original array. If there are no duplicates, return an empty array.
Object.defineProperty(exports, "__esModule", { value: true });
function findDuplicatesWithNestedLoop(arr) {
    const duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            // Check if we have found a duplicate  
            if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }
        }
    }
    return duplicates;
}
// Example usage:  
const inputArray = [1, 2, 3, 4, 2, 3, 5, 1];
const result = findDuplicatesWithNestedLoop(inputArray);
console.log(result); // Output: [2, 3, 1]  
//array of students  
const students = [
    { name: 'Ali', age: 20, marks: 85 },
    { name: 'Bina', age: 22, marks: 75 },
    { name: 'Dolly', age: 19, marks: 65 },
    { name: 'Saman', age: 20, marks: 88 },
    { name: 'Fari', age: 23, marks: 80 },
];
function filterStudents(students) {
    console.log('Students who got marks greater than 80 ');
    for (const student of students) {
        if (student.marks > 80) {
            console.log(`Name: ${student.name}, Age: ${student.age}, Marks: ${student.marks}`);
        }
    }
}
filterStudents(students);
