

//Q1. Write a function named sumArray that takes an array of numbers as input.
//The function should return the sum of all numbers in the array.
function sumArray1(...num: number[]) {
    let sum = num.reduce((acc, curr) =>{return acc+curr},0)
return sum
}
let sumArr = sumArray1(1,2,3,4,5);
console.log('Result1', sumArr); //15
console.log(sumArray1( 4,6,5));  console.log(sumArray1(2,2,2,3,4,2));


console.log('Q2');


//Q2. Write a function named reverseString that takes a string as input.
//The function should return the reversed version of the input string.
function reverseString(input: string) :string {
    let reversed = '';
    for (let i = input.length -1; i>=0; i--) {
reversed += input[i];
    }
    return reversed;
}
const reversedString = reverseString( "Hello");
console.log('reverseString: ', reversedString);



