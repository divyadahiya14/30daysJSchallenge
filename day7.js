//Activity 1: Object Creation & Access
//Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const book = {title: "30 days of JS", author: "R.K. Sharma", year: 2015};
console.log(book);
// Output: { title: '30 days of JS', author: 'R.K. Sharma', year: 2015 }

// Task 2: Access and log the title and author properties of the book object.
console.log("Title - " + book.title); // Output: Title - 30 days of JS
console.log("Author - " + book["author"]); // Output: Author - R.K. Sharma

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.details = function() {
    return `Book details: Title: ${this.title} & Author: ${this.author}`;
};
console.log(book.details()); // Output: Book details: Title: 30 days of JS & Author: R.K. Sharma

// Task 4: Add a method to the book object that takes a parameter (year) & updates the book's year property, then log the updated object.
book.updateYear = function(newYear) {
    this.year = newYear;
};
// Before updation
console.log(book.year); // Output: 2015
// After updation
book.updateYear(2020);
console.log(book.year); // Output: 2020

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
let library = {
    name: "MyLib",
    books: [
        { title: "Advanced DSA", author: "S.K. Gupta", year: 2018 },
        { title: "Python Programmer", author: "J.D. King", year: 2017 },
        { title: "Be A JS Expert", author: "A.K. Sharma", year: 2019 }
    ]
};
console.log(library);
// Output: 
// { 
//   name: 'MyLib',
//   books: [
//     { title: 'Advanced DSA', author: 'S.K. Gupta', year: 2018 },
//     { title: 'Python Programmer', author: 'J.D. King', year: 2017 },
//     { title: 'Be A JS Expert', author: 'A.K. Sharma', year: 2019 }
//   ]
// }

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(library.name); // Output: MyLib
library.books.forEach(book => console.log(book.title));
// Output:
// Advanced DSA
// Python Programmer
// Be A JS Expert

// Task 7: Add a method to the book object that uses the 'this' keyword to return a string with the book's title and year, and log the result of calling this method.
book.str = function() {
    return `Title: ${this.title}, Year: ${this.year}`;
};
console.log(book.str()); // Output: Title: 30 days of JS, Year: 2020

// Task 8: Use a 'for...in' loop to iterate over the properties of the book object and log each property and its value.
let BOOK = {
    Title: "JavaScript",
    Year: 2016,
    Price: 400
};
for (let key in BOOK) {
    console.log(`${key}: ${BOOK[key]}`);
}
// Output:
// Title: JavaScript
// Year: 2016
// Price: 400

// Task 9: Use 'Object.keys' & 'Object.values' methods to log all the keys and values of the book object.
console.log(Object.keys(BOOK)); // Output: [ 'Title', 'Year', 'Price' ]
console.log(Object.values(BOOK)); // Output: [ 'JavaScript', 2016, 400 ]


