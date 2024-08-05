

// Q3: First and Last Element
// Objective: Write a TypeScript function that takes an array of numbers and returns a new array containing only the first and last elements of the input array.

function returnFirstLast(...arr: number[]){
    if( arr.length === 0){
return [];
    } 
     if (arr.length === 1){
        return [arr[0], arr[0]];
    };
    return [arr[0],arr[arr.length-1]];
}
//Test Case
console.log('Q3');
console.log(returnFirstLast(2,3,4,8,9));
console.log(returnFirstLast(8));
console.log(returnFirstLast());

// Question: 4 
// Find the Largest Number
// Objective: Write a TypeScript function that takes an array of numbers and returns the largest number in the array.
console.log('Q4');
function largestNum (...num: number[]) {
    if (num.length === 0) {
        return undefined;
    }
    let largest = num[0];
    for (let i =1; i < num.length; i++){
        if (num[i] > largest) {
            largest = num[i]
        }
    } return largest
}
console.log(largestNum(-2, 7,8,4,));
console.log(largestNum());
console.log(largestNum(60));






