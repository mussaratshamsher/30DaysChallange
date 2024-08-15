"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Question 35:');
// Sum of Odd Numbers and Multiplication Table Write a function that takes an array of numbers as input. The function should first find the sum of 
// all the odd numbers in the array. Then, it should generate and return an array containing the multiplication table of that sum from 1 to 10.
function sumOfOddNumbersAndMultiplicationTable(nums) {
    // Calculates the sum of odd numbers using filter and reduce  
    const sumOfOdds = nums.filter(num => num % 2 !== 0).reduce((acc, num) => acc + num, 0);
    // Generate multiplication table using a for loop  
    const multiplicationTable = [];
    for (let i = 1; i <= 10; i++) {
        multiplicationTable.push(sumOfOdds * i);
    }
    return multiplicationTable;
}
console.log(sumOfOddNumbersAndMultiplicationTable([2, 3, 5]));
console.log(' Question 36 :');
// Filter and Square Even Numbers Write a function that takes an array of numbers as input. The function should filter out all the even 
// numbers from the array, square each of those even numbers, and return a new array containing these squared values.
function filterAndSquareEvenNum(numbers) {
    return numbers
        .filter(num => num % 2 == 0) // Filter out even numbers  
        .map(num => num * num); // Square the filtered even numbers  
}
console.log(filterAndSquareEvenNum([2, 4, 5, 7, 8,]));
console.log(filterAndSquareEvenNum([9, 2, 5, 6]));
