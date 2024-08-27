console.log('Question 59: ');
// Convert Number to Words
// Write a TypeScript function that takes a number between 0 and 99 and returns the number in words. For example, if the input is 45, 
// the output should be "Forty-Five".
function numberToWords(num: number): string {  
    if (num < 0 || num > 99) {  
      throw new Error("Input must be between 0 and 99.");  
    }  
    const words: { [key: number]: string } = {  
      0: "Zero", 1: "One", 2: "Two", 3: "Three", 4: "Four",  
      5: "Five", 6: "Six", 7: "Seven", 8: "Eight", 9: "Nine",  
      10: "Ten", 11: "Eleven", 12: "Twelve", 13: "Thirteen",  
      14: "Fourteen", 15: "Fifteen", 16: "Sixteen", 17: "Seventeen",  
      18: "Eighteen", 19: "Nineteen", 20: "Twenty", 30: "Thirty",  
      40: "Forty", 50: "Fifty", 60: "Sixty", 70: "Seventy",  
      80: "Eighty", 90: "Ninety"  
    };  
  
    if (num in words) {  
      return words[num];  
    } else {  
      const tenPart = Math.floor(num / 10) * 10;  
      const unitPart = num % 10;  
      return `${words[tenPart]}-${words[unitPart]}`;  
    }  
  }  
    
  console.log(numberToWords(45)); // Outputs: "Forty-Five"
    
console.log('Question 60:');
//  Calculate the Sum of the First n Natural Numbers
// Write a TypeScript function that takes a positive integer n and returns the sum of the first n natural numbers. For example, if n = 5, 
// the output should be 15 (because 1 + 2 + 3 + 4 + 5 = 15).
function sumOfNaturalNums(n: number): number {  
    if (n <= 0) {  
      throw new Error("Input must be positive integer.");  
    }  
    if (n === 1) {  
      return 1; // Base case  
    }  
    return n + sumOfNaturalNums(n - 1); // Recursive case  
  }  
 
  console.log(sumOfNaturalNums(5)); // Outputs: 15
