"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Question 29');
// Write a TypeScript function `areAnagrams(str1: string, str2: string): boolean` that checks if two strings are anagrams 
// of each other. An anagram is a word or phrase formed by rearranging the letters
//  of another word or phrase using all the original letters exactly once.
function areAnagrams(str1, str2) {
    const normalizedStr1 = str1.toLowerCase();
    const normalizedStr2 = str2.toLowerCase();
    if (normalizedStr1.length !== normalizedStr2.length)
        return false;
    const charCount1 = new Array(26).fill(0);
    const charCount2 = new Array(26).fill(0);
    for (let i = 0; i < normalizedStr1.length; i++) {
        charCount1[normalizedStr1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        charCount2[normalizedStr2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    return charCount1.every((count, index) => count === charCount2[index]);
}
console.log(areAnagrams('Hello', 'Typescript')); //false
console.log(areAnagrams('Sana', 'Anas')); //true
console.log('Question 30');
// Write a TypeScript function `reverseWords(sentence: string): string` that reverses the words in a given sentence.
//  For example, if the input is `"Hello world"`, the output should be `"world Hello"`.
function reverseWords(sentence) {
    return sentence
        .trim()
        .split(/\s+/) // Split by whitespace, collapsing multiple spaces  
        .reverse() // Reverse the array of words  
        .join(" "); // Join the words back into a string  
}
console.log(reverseWords("  Hello   world  ")); //Output: world Hello
console.log(reverseWords("  Python    Everywhere    ")); //output: Everywhere Python
