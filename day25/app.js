"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Question 49:');
//  Calculate the Difference Between the Sum of Odd and Even Digits
// You are given a positive integer. You need to calculate the sum of the odd digits and the sum of the even digits, then find the
//  difference between these two sums. The difference should be positive.
function calculateDifference(num) {
    const strNum = num.toString();
    let sumOdd = 0;
    let sumEven = 0;
    for (let i = 0; i < strNum.length; i++) {
        const digit = Number(strNum[i]);
        if (digit % 2 === 0) {
            sumEven += digit;
        }
        else {
            sumOdd += digit;
        }
    }
    return Math.abs(sumOdd - sumEven);
}
console.log(calculateDifference(12478));
console.log(calculateDifference(123456));
console.log('Question 50:');
//  Find the Smallest Divisor of a Number (Greater than 1)
//  You are given a positive integer. Your task is to find the smallest divisor of this number that is greater than 1.
function smallestDivisor(num) {
    for (let i = 2; i <= 2; i++) {
        if (num % i === 0) {
            return i; //Return the first nmmber that divides num without remainder
        }
    }
    return num; // In case the number is 1 (though the problem states num is positive)  
}
console.log(smallestDivisor(15));
