console.log('Question 39: ');

// Check for Prime Number Problem:
// Write a TypeScript function that takes a positive integer as input and checks whether it is a prime number. A prime number is a number greater
//  than 1 that has no divisors other than 1 and itself. If the number is prime, return true; otherwise, return false.
function isPrime(num: number): boolean {  
    // Check if the number is less than 2  
    if (num <= 1) {  
        return false;  
    }  
    // Only check for factors up to the square root of the number  
    const limit = Math.sqrt(num);  
    for (let i = 2; i <= limit; i++) {  
        if (num % i === 0) {  
            return false; // Found a divisor other than 1 and itself  
        }  
    }  
    return true; // No divisors found, the number is prime  
}  
 
console.log(isPrime(7)); // true  
console.log(isPrime(10)); // false  

console.log('Question 40:');

//  Reverse a Number Problem:
// Write a TypeScript function that takes a number as input and returns the number with its digits reversed. For example, if the input is 1234, 
// the output should be 4321.

function reverseNumber(num: number): number {  
    
    const numStr = num.toString();  //Convert the number to a string  
    
    // Reverse the string and convert it back to a number  
    const reversedNumStr = numStr.split('').reverse().join('');  
    
    // Convert the reversed string back to a number  
    return parseFloat(reversedNumStr);  
}  
 
console.log(reverseNumber(1234)); // Output: 4321  
console.log(reverseNumber(100)); // Output: 1  






