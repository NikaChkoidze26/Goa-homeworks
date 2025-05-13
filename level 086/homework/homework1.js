
let book = {
    title: "To kill a mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction",
    price: 9.99
};


console.log(book);


console.log("Title:", book.title);         
console.log("Author:", book["author"]);   
console.log("Year:", book.year);           
console.log("Genre:", book["genre"]);    
console.log("Price:", book.price);         

let sentence = `The book titled "${book.title}" was written by ${book.author} in ${book.year}. It is a ${book.genre} novel, priced at $${book.price}.`;

console.log(sentence);
