
// Question 7: Find Duplicate Numbers in an Array
// Write a TypeScript function that takes an array of numbers as input and returns a new array containing only the 
//duplicate numbers from the original array. If there are no duplicates, return an empty array.

function findDuplicates(arr: number[]): number[] {  
    const duplicates: number[] = [];  

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
const result = findDuplicates(inputArray);  
console.log(result); // Output: [2, 3, 1]  

// Question 8: Filter Students with Marks Greater than 80
// Create an array of objects where each object represents a student with properties name, age, and marks. 
//Write a function that filters and prints the data of students who have marks greater than 80.
interface Student {  
    name: string;  
    age: number;  
    marks: number;  
}  
//array of students  
const students: Student[] = [  
    { name: 'Ali', age: 20, marks: 85 },   { name: 'Bina', age: 22, marks: 75 },    
    { name: 'Dolly', age: 19, marks: 65 },   { name: 'Saman', age: 20, marks: 88 },  
    { name: 'Fari', age: 23, marks: 80 },  
];  
function filterStudents(students: Student[]) {  
    console.log('Students who got marks greater than 80 ');  
    for (const student of students) {  
        if (student.marks > 80) {  
            console.log(`Name: ${student.name}, Age: ${student.age}, Marks: ${student.marks}`);  
        }  
    }  
}  
filterStudents(students);  
