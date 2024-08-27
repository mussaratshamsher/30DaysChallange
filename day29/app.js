"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Question 57:');
//  Calculate the Product of Non-Zero Digits
// Write a TypeScript function that takes a number as input and returns the product of all non-zero digits in the number.
function productOfNonZeroDigits(num) {
    const digits = num.toString().match(/[1-9]/g); // Match all non-zero digits  
    if (!digits)
        return 0; // Return 0 if there are no non-zero digits  
    return digits.reduce((product, digit) => product * Number(digit), 1);
}
console.log(productOfNonZeroDigits(123405)); // Output: 120 (1 * 2 * 3 * 4 * 5)  
console.log(productOfNonZeroDigits(1001)); // Output: 1 (1 * 1)  
// Convert Number to String and Match Non-Zero Digits:
// num.toString().match(/[1-9]/g) converts the number to a string and uses a regular expression to find all non-zero digits (1 through 9). The g flag ensures that all matches are returned as an array.
// Check for Non-Zero Digits:
// If there are no matches (i.e., the number consists of zeros), digits will be null. The function returns 0 in this case.
// Calculate the Product:
// The reduce method is used to multiply all the non-zero digits together. It starts with an initial value of 1 and multiplies each digit (converted back to a number) to the accumulated product.
console.log('Question 58: ');
// Find the Difference Between the Largest and Smallest Digit
// Write a TypeScript function that takes a number as input and returns the difference between its largest and smallest digits.
function LargestAndSmallestDigits(num) {
    const digits = num.toString().split('').map(Number);
    const maxDigit = Math.max(...digits);
    const minDigit = Math.min(...digits);
    return maxDigit - minDigit;
}
console.log(LargestAndSmallestDigits(123405)); // Output: 4 (5 - 1)  
console.log(LargestAndSmallestDigits(1001)); // Output: 0 (1 - 1)  
// Convert Number to String: num.toString()
// This converts the number into a string representation.
// Split into Digits: .split('').map(Number)
// This splits the string into an array of characters and converts each character back to a number.
// Find Maximum and Minimum Digits:
// Math.max(...digits) finds the largest digit.
// Math.min(...digits) finds the smallest digit.
// Calculate and Return the Difference:
// The function returns the difference between the largest and smallest digits.
