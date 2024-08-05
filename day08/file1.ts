
// Question : 15
// Create two separate files. In the first file, define and export two functions: calculateArea (calculates the area of a rectangle given its width and height) 
//and calculatePerimeter (calculates the perimeter of a rectangle given its width and height). 
//In the second file, import both functions and use them to calculate the area and perimeter of a rectangle with a width of 5 and a height of 10. Print the results to the console.
export function findArea (width: number, height: number) {
    return  width*height
}
console.log(findArea(5,10));

export function findparameter(width: number, height: number) {
       return 2 * (width+height)
}
console.log(findparameter(5,10));

//Question : 16
// Create three separate files. In the first file, define and export an interface Shape with properties name and area, 
// and a method calculateArea(). In the second file, define and export a class Circle that implements the Shape interface. 
// The class should have a property radius and implement the calculateArea method. 
// In the third file, import the Circle class, create an instance of Circle, and print the name and area of the circle.

// Define and export the Shape interface  
export interface Shape {  
    name: string;  
    area: number;  
    calculateArea(): number;  
}









