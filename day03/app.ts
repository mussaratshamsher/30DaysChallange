console.log('Question 5')
// Remove Duplicates from Array
// Write a TypeScript function named removeDuplicates that takes an array of numbers and returns a new array with all duplicate elements removed. 
// Do not use built-in methods like Set

function removeDuplicates(arr: number[]): number[] {  
    
    const result: number[] = [];  // This array will hold the unique elements   
    const seen: number[] = [];  // This array will keep track of seen elements 

    // Iterate through the original array  
    for (let i = 0; i < arr.length; i++) {  
        const current = arr[i];  
        // Check if the current element has been seen before  
        let isDuplicate = false;  
        for (let j = 0; j < seen.length; j++) {  
            if (seen[j] === current) {  
                isDuplicate = true;  
                break;  
            }  
        }  
        if (!isDuplicate) {  // If it's not a duplicate, add it to both the result and seen arrays  
            result.push(current);  
            seen.push(current);  
        }  
    }  
    return result;  
}  
// Example usage:  
const numbers = [1, 2, 2, 3, 4, 4, 5];  
const uniqueNumbers = removeDuplicates(numbers);  
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]  


console.log('Question 6')
// Find the Second Largest Number in an Array:
// Write a TypeScript function named findSecondLargest that takes an array of numbers and returns the second largest number in the array. Do not use built-in methods like sort.

function findSecondLargest(...numbers: number[]){  
    if (numbers.length < 2) {  
        return null; // Not enough elements to determine second largest  
    }  
    let largest = -Infinity;  
    let secondLargest = -Infinity;  
    for (let num of numbers) {  
        if (num > largest) {  
            secondLargest = largest; // Update second largest  
            largest = num; // Update largest  
        } else if (num > secondLargest && num < largest) {  
            secondLargest = num; // Update second largest if it's between largest and the second largest  
        }  
     }  
 return secondLargest === -Infinity ? null : secondLargest; // Return null if no second largest found 
} 
// Example usage:  
 
console.log(findSecondLargest(20,60,75,3,65,)); //logs 65
console.log(findSecondLargest(26,30,25,28,26,)); //logs28
console.log(findSecondLargest(-2, 0,-4,3,)); //0

