// Refactored clean javascript code with the principles of clean code

const books = [
  { id: 1, name: "Der alte Mann und das Meer", price: 10.5 },
  { id: 2, name: "Moby Dick", price: 12.3 },
  { id: 3, name: "1984", price: 8.5 },
];

function getBookById(bookId) {
  return books.find((book) => book.id === bookId) || null;
}

function addBook(name, price) {
  const maxId = Math.max(...books.map((book) => book.id));
  books.push({ id: maxId + 1, name, price });
}

function listBooks() {
  for (const book of books) {
    console.log(`${book.name} - ${book.price}€`);
  }
}

// Example Function Calls
const myBook = getBookById(2);
console.log(myBook);
addBook("Fahrenheit 451", 9.2);
listBooks();
