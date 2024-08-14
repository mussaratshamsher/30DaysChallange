console.log('Question 33:');

 //Calculate the Product of Odd Numbers Write a function productOfOdds(numbers: number[]): number that takes an array of numbers as input. 
 //The function should calculate the product of all odd numbers in the array and return the result. If there are no odd numbers, return 1.
 
 function productOfOdds(numbers: number[]): number {  
    return numbers.reduce((product, number) => {  
        return number % 2 !== 0 ? product * number : product;  
    }, 1) || 1; // If all are even, return 1  
}
console.log(productOfOdds([1,2,3,4,5])); //output 15
console.log(productOfOdds([3,4,3,6,3])); //output 27
console.log(productOfOdds([2,4,6])); //output 1



console.log('Question 34:');
//Find the Longest Word in a Sentence Write a function findLongestWord(sentence: string): string that takes a string sentence as
 //input. The function should return the longest word in the sentence. If there are multiple words with the same length, return the first one.
 function findLongestWord(sentence: string): string {  
    return sentence.split(' ').reduce((longest, current) => {  
        return current.length > longest.length ? current : longest;  
    }, '');  
}
console.log(findLongestWord('Work , work and work .')); //work
console.log(findLongestWord('Work hard to get Success .')); //Success








