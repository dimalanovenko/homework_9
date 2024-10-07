const bookTitles = [
    {
        title: "48 Laws Of Power",
        author: "Robert Greene",
        year: 1999,
        pages: 480
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        pages: 281
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949,
        pages: 328
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        pages: 180
    },
    {
        title: "Moby Dick",
        author: "Herman Melville",
        year: 1851,
        pages: 635
    },
];

console.log(bookTitles);

let bookName = prompt("какую книгу добавить в список?");

let newBook = {
        title: bookName,
        author: null,
        year: null,
        pages: null
}

bookTitles.push(newBook)

console.log(bookTitles)
