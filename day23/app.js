"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Question 45: ');
//Write a function calculateFactorial that takes a number as input and returns its factorial.
function calculateFactorial(n) {
    if (n < 0)
        throw new Error("Invalid input");
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(calculateFactorial(5)); //120
console.log(calculateFactorial(3)); //6
console.log('Question 46: ');
//Write a function convertToBinary that takes a number as input and converts it into its binary form.
function convertToBinary(num) {
    if (!Number.isFinite(num) || num < 0) {
        throw new Error("Invalid input");
    }
    return num.toString(2);
}
console.log(convertToBinary(5)); // Output: "101"  
console.log(convertToBinary(0)); // Output: "0"  
console.log(convertToBinary(255)); // Output: "11111111"
