"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findArea = findArea;
exports.findparameter = findparameter;
// Question : 15
// Create two separate files. In the first file, define and export two functions: calculateArea (calculates the area of a rectangle given its width and height) 
//and calculatePerimeter (calculates the perimeter of a rectangle given its width and height). 
//In the second file, import both functions and use them to calculate the area and perimeter of a rectangle with a width of 5 and a height of 10. Print the results to the console.
function findArea(width, height) {
    return width * height;
}
console.log(findArea(5, 10));
function findparameter(width, height) {
    return 2 * (width + height);
}
console.log(findparameter(5, 10));
