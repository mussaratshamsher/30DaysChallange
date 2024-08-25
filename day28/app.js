"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Question 55:');
//  Armstrong Number Checker (Without Using split)
//  Check if a given number is an Armstrong number. An Armstrong number is a number that is equal to the sum of its own digits
//   each raised to the power of the number of digits
function isArmstrongNumber(num) {
    const numStr = num.toString(); // Convert number to string to access digits  
    const numDigits = numStr.length; // Count the number of digits  
    let total = 0; // Initialize total to accumulate the power sums  
    for (let digit of numStr) { //Iterate through each digit 
        total += Math.pow(Number(digit), numDigits); // Raise each digit to the power of numDigits  
    }
    return total === num; // Compare accumulated total with the original number  
}
const testNumbers = [0, 1, 153, 370, 9474];
// Check multiple numbers 
testNumbers.forEach(number => {
    console.log(`${number} is ${isArmstrongNumber(number) ? '' : 'not '}an Armstrong number.`);
});
console.log('Question 56:');
//  Find the LCM (Least Common Multiple)
//  Find the Least Common Multiple (LCM) of two numbers. LCM is the smallest number that is a multiple of both given numbers.
function lcm(a, b) {
    let max = Math.max(a, b);
    let lcm = max;
    while (true) {
        if (lcm % a === 0 && lcm % b === 0) {
            break;
        }
        lcm += max; // Increment by the maximum number  
    }
    return lcm;
}
const num1 = 12;
const num2 = 18;
console.log(`LCM of ${num1} and ${num2} is ${lcm(num1, num2)}`);
