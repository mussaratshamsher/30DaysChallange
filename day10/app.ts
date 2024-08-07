console.log('Question 19');
// Implement a Basic Counter
// Problem Statement: Create a TypeScript class Counter that manages a simple counter with the following methods:

// increment(): void - Increments the counter by 1.
// decrement(): void - Decrements the counter by 1.
// getValue(): number - Returns the current value of the counter.

class Counter {
    private count: number;
    constructor() {
        this.count = 0; //initiliae the counter from zero
    }
    increment(): void {
        this.count += 1; //increment the value to 1
    }
    decrement(): void {
        this.count -= 1; //decrement the value
    }
    getValue(): number {
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
      private name: string;
      private grade: number;
   
      constructor () {
        this.name = "";
        this.grade = 0;
      }
    setName(name: string) {
        this.name = name; //Sets the student's name.
    }
    setGrade(grade: number) {
        this.grade = grade;//Sets the student's grade.
    }
    getRecord(): { Name: string; Grade: number } {  
        return { Name: this.name, Grade: this.grade }; // Return object with name and grade  
    }  
}

const student = new Student();
student.setName("Ali");
student.setGrade(92);
console.log(student.getRecord()); // Output: { name: "Ali", grade: 92 }