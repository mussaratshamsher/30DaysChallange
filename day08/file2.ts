
//Question 15

//imoporting files from file 1
import { findArea } from "./file1";
import { findparameter } from "./file1";

//Question 16(a)

import { Shape } from './file1';  
// 16 (b)

// Define and export the Circle class that implements the Shape interface  
export class Circle implements Shape {  
    name: string;  
    radius: number;  
    area: number;  

    constructor(name: string, radius: number) {  
        this.name = name;  
        this.radius = radius;  
        this.area = this.calculateArea();  
    }  

    calculateArea(): number {  
        return Math.PI * Math.pow(this.radius, 2);  
    }  
}  