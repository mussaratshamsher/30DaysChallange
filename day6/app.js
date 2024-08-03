"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Question11');
// Create a simple calculator that can perform addition, subtraction, multiplication, and division.
function addition(num1, num2) {
    let result = num1 + num2;
    return `Addition:${result}`;
}
console.log(addition(2, 4));
// Subtraction
function subt(num1, num2) {
    let result = num1 - num2;
    return `Subtraction: ${result}`;
}
console.log(subt(4, 1));
// Multiplication
function multiply(num1, num2) {
    let result = num1 * num2;
    return `Multiplication: ${result}`;
}
console.log(multiply(3, 3));
// Division (/)
function divide(num1, num2) {
    let result = num1 / num2;
    return `Division: ${result}`;
}
console.log(divide(6, 2));
console.log('Using OOP');
class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}
// Creating an instance of Calculator  
const calculator = new Calculator();
// Perform calculations  
const sum = calculator.add(10, 5);
const subtraction = calculator.subtract(10, 5);
const product = calculator.multiply(10, 5);
const division = calculator.divide(10, 5); // Will not throw error  
console.log(`Sum: ${sum}`);
console.log(`Subtraction: ${subtraction}`);
console.log(`Product: ${product}`);
console.log(`Division: ${division}`);
console.log('Question 12');
//: Separate Elements by Type
//Given an array with mixed types of elements, separate them into different arrays based on their type (number, string, boolean).
function separateTypes(...arr) {
    return {
        numbers: arr.filter((elem) => typeof elem === 'number'),
        strings: arr.filter((elem) => typeof elem === 'string'),
        booleans: arr.filter((elem) => typeof elem === 'boolean'),
    };
}
// Example usage   
console.log(separateTypes("Ali", 2, false, "Java", true, "Script", 4));
