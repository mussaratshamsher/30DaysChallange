"use strict";
//Question 15
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
// 16 (b)
// Define and export the Circle class that implements the Shape interface  
class Circle {
    name;
    radius;
    area;
    constructor(name, radius) {
        this.name = name;
        this.radius = radius;
        this.area = this.calculateArea();
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
exports.Circle = Circle;
