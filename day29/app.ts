
console.log('Question 57:')
//  Calculate the Product of Non-Zero Digits
// Write a TypeScript function that takes a number as input and returns the product of all non-zero digits in the number.
function productOfNonZeroDigits(num: number): number {  
    const digits = num.toString().match(/[1-9]/g); // Match all non-zero digits  
    if (!digits) return 0; // Return 0 if there are no non-zero digits  
    return digits.reduce((product, digit) => product * Number(digit), 1);  
}
console.log(productOfNonZeroDigits(123405)); // Output: 120 (1 * 2 * 3 * 4 * 5)  
console.log(productOfNonZeroDigits(1001));   // Output: 1 (1 * 1)  

console.log('Question 58: ');
// Find the Difference Between the Largest and Smallest Digit
// Write a TypeScript function that takes a number as input and returns the difference between its largest and smallest digits.
function LargestAndSmallestDigits(num: number): number {  
    const digits = num.toString().split('').map(Number);  
    const maxDigit = Math.max(...digits);  
    const minDigit = Math.min(...digits);  
    return maxDigit - minDigit;  
}
console.log(LargestAndSmallestDigits(123405)); // Output: 4 (5 - 1)  
console.log(LargestAndSmallestDigits(1001));   // Output: 0 (1 - 1)  



