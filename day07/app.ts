console.log(' \t Question: 13');

// Create a TypeScript class Book that has properties for title, author, publicationYear, and genre. The class should have methods to:
// Display the book details.
// Check if the book is a recent publication (within the last 5 years).
// Change the genre of the book.
// Check if the book's author matches a given author name.

class Book {  
    title: string;  
    author: string;  
    publicationYear: number;  
    genre: string;  

    constructor(title: string, author: string, publicationYear: number, genre: string) {  
        this.title = title;  
        this.author = author;  
        this.publicationYear = publicationYear;  
        this.genre = genre;  
    }  
    // Method to display book details  
    displayDetails() {  
        console.log(`Title: ${this.title}, Author: ${this.author}, Publication Year: ${this.publicationYear}, Genre: ${this.genre}`); 
    }  
    // Method to check if the book is a recent publication  
    isRecent(): boolean {  
        const currentYear = new Date().getFullYear();  
        return (currentYear - this.publicationYear) <= 5;  
    }  
    // Method to change the genre of the book  
    changeGenre(newGenre: string) {  
        this.genre = newGenre;  
    }  
    // Method to check if the book's author matches a given author name  
    isAuthor(authorName: string): boolean {  
        return this.author === authorName;  
    }  
}  
// Example usage  
const book = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Fiction");  
book.displayDetails();  
console.log(`Is recent: ${book.isRecent()}`);  
book.changeGenre("Classic");  
console.log(`New Genre: ${book.genre}`);  
console.log(`Is author F. Scott Fitzgerald? ${book.isAuthor("F. Scott Fitzgerald")}`);  

console.log('  \t Question 14:\n ');
// Create an interface Person that includes properties for name, age, email, phone, and addresses. The addresses property should be an array of objects, each containing street, city, state, and zipcode.
// Write a function to find the first person living in a specific city and return their name and email.
// Hints:
// Define the Address and Person interfaces with the required properties.
// Use nested loops to iterate through the people array and each person's addresses array.
// Check if the city property matches the given city in the function.
// Return the name and email of the first matching person or undefined if no match is found.

interface Address {  
    street: string;  
    city: string;  
    state: string;  
    zipcode: string;  
}  
interface Person {  
    name: string;  
    age: number;  
    email: string;  
    phone: string;  
    addresses: Address[];  
}  

function findPerson(people: Person[], city: string): { name: string; email: string } | undefined {  
    for (const person of people) {  
        for (const address of person.addresses) {  
            if (address.city === city) {  
                return { name: person.name, email: person.email };  
            }  
        }  
    }  

    return undefined; // Return undefined if no matching person is found.  
}  
// Example usage  
const people: Person[] = [  
    {  
        name: "Alia Khan",  
        age: 30,  
        email: "alia@example.com",  
        phone: "123-456-7890",  
        addresses: [  
            { street: "123 Main St", city: "Islamabad", state: "West", zipcode: "98101" },  
            { street: "456 Elm St", city: "Karachi", state: "East", zipcode: "V6B 3B9" }  
        ]  
    },  
    {  
        name: "Muhammad Ali",  
        age: 25,  
        email: "ali@example.com",  
        phone: "987-654-3210",  
        addresses: [  
            { street: "789 Oak St", city: "Khuzdar", state: "North", zipcode: "97201" },  
            { street: "321 Maple St", city: "Karachi", state: "South", zipcode: "98101" }  
        ]  
    }  
];  

const result = findPerson(people, "Karachi");  
if (result) {  
    console.log(`Name: ${result.name}, Email: ${result.email}`);  
} else {  
    console.log("No person found in that city.");  
}  


