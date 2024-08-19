console.log('Question 43:');

//  Count Digits in a Number
// Given a number, your task is to count and return the number of digits in that number.

function countDigits(num: number): number {  
    return Math.abs(num).toString().length; //Math.abs to ignore the sign  
}  
  
console.log(countDigits(-12345)); // Output: 5
console.log(countDigits(7893)); //output 4

console.log('Question 44: ');
// Calculate the Power of a Number
// Given a base number b and an exponent e, your task is to calculate b raised to the power of e without using built-in methods like Math.pow.

function powerOfNum(b: number, e: number): number {  
    if (e < 0) {  
        return 1 / powerOfNum(b, -e); //Handles negative exponents  
    }  
    let result = 1;  
    for (let i = 0; i < e; i++) {  
        result *= b;  
    }  
    return result;  
}  
 
console.log(powerOfNum(2, 3)); // Output: 8  
console.log(powerOfNum(2, -3)); // Output: 0.125