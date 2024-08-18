console.log('Question 39:');

//  Sum of Digits
// Write a function sumOfDigits that takes a number as input and returns the sum of its digits.

function sumOfDigits(n: number) :number {  
    return Math.abs(n)  
        .toString()  
        .split('')  
        .reduce((sum, digit) => sum + parseInt(digit), 0); 

}  
 
console.log(sumOfDigits(123));  // Output: 6  
console.log(sumOfDigits(-456)); // Output: 15

console.log('Question 40:');
//  Count Consonants in a String
// Write a function countConsonants that takes a string as input and returns the number of consonants in the string. 
// Consonants are all alphabetical characters except a, e, i, o, u (both lowercase and uppercase).

function countConsonants(input: string): number {  
    const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";  
    let count = 0;  

    for (const char of input) {  
        if (consonants.includes(char)) {  
            count++;  
        }  
    }  
    return count;  
}  
 
console.log(countConsonants("Hello World!")); // Output: 7  
console.log(countConsonants("aeiou"));       // Output: 0