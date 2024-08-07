"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Question 19');
// Implement a Basic Counter
// Problem Statement: Create a TypeScript class Counter that manages a simple counter with the following methods:
// increment(): void - Increments the counter by 1.
// decrement(): void - Decrements the counter by 1.
// getValue(): number - Returns the current value of the counter.
class Counter {
    count;
    constructor() {
        this.count = 0; //initiliae the counter from zero
    }
    increment() {
        this.count += 1; //increment the value to 1
    }
    decrement() {
        this.count -= 1; //decrement the value
    }
    getValue() {
        return this.count; //return the value of cuonter
    }
}
const counter = new Counter();
counter.increment();
counter.increment();
console.log(counter.getValue()); // Output: 2
counter.decrement();
console.log(counter.getValue()); // Output: 1
console.log('Question 20');
// Implement a Simple Student Record
// Problem Statement: Create a TypeScript class Student to manage a student's name and grade. The class should have the following methods:
// setName(name: string): void - Sets the student's name.
// setGrade(grade: number): void - Sets the student's grade.
// getRecord(): { name: string; grade: number } - Returns an object with the student's name and grade.
class Student {
    name;
    grade;
    constructor() {
        this.name = "";
        this.grade = 0;
    }
    setName(name) {
        this.name = name; //Sets the student's name.
    }
    setGrade(grade) {
        this.grade = grade; //Sets the student's grade.
    }
    getRecord() {
        return { Name: this.name, Grade: this.grade }; // Return object with name and grade  
    }
}
const student = new Student();
student.setName("Ali");
student.setGrade(92);
console.log(student.getRecord()); // Output: { name: "Ali", grade: 92 }
