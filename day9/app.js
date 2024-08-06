"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Question 17');
//Implement a stack using TypeScript. The stack should have the following methods:
// push(item: T): void - Adds an item to the top of the stack.
// pop(): T | undefined - Removes and returns the item from the top of the stack. If the stack is empty, it should return undefined.
// peek(): T | undefined - Returns the item at the top of the stack without removing it. If the stack is empty, it should return undefined.
// isEmpty(): boolean - Returns true if the stack is empty, otherwise false.
// Constraints:
// Use generics to make the stack implementation type-safe.
// The stack should handle various data types (number, string, etc.).
class Stack {
    items;
    constructor() {
        this.items = [];
    }
    // Adds an item to the top of the stack  
    push(item) {
        this.items.push(item);
    }
    // Removes and returns the item from the top of the stack  
    pop() {
        return this.items.pop();
    }
    // Returns the item at the top of the stack without removing it  
    peek() {
        return this.items[this.items.length - 1];
    }
    // Returns true if the stack is empty, otherwise false  
    isEmpty() {
        return this.items.length === 0;
    }
    // Optional: Method to return the size of the stack  
    size() {
        return this.items.length;
    }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.peek()); // Output: 2  
console.log(stack.pop()); // Output: 2  
console.log(stack.isEmpty()); // Output: false  
console.log(stack.pop()); // Output: 1  
console.log(stack.isEmpty()); // Output: true  
console.log('Question 18');
// Problem Statement:
// Implement a queue using TypeScript. The queue should have the following methods:
// enqueue(item: T): void - Adds an item to the end of the queue.
// dequeue(): T | undefined - Removes and returns the item from the front of the queue. If the queue is empty, it should return undefined.
// peek(): T | undefined - Returns the item at the front of the queue without removing it. If the queue is empty, it should return undefined.
// isEmpty(): boolean - Returns true if the queue is empty, otherwise false.
// Constraints:
// Use generics to make the queue implementation type-safe.
// The queue should handle various data types (number, string, etc.).
class Queue {
    items;
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    // Removes and returns the item from the front of the queue  
    dequeue() {
        return this.items.shift();
    }
    // Returns the item at the front of the queue without removing it  
    peek() {
        return this.items[0];
    }
    // Returns true if the queue is empty, otherwise false  
    isEmpty() {
        return this.items.length === 0;
    }
    // Optional: Method to return the size of the queue  
    size() {
        return this.items.length;
    }
}
// Example 
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.peek()); // Output: 1  
console.log(queue.dequeue()); // Output: 1  
console.log(queue.isEmpty()); // Output: false  
console.log(queue.dequeue()); // Output: 2  
console.log(queue.isEmpty()); // Output: true  
