const bookTitles = [
    {
        title: "48 Laws Of Power",
        author: null,
        year: null,
        pages: null
    },
    {
        title: "48 Laws Of Power",
        author: null,
        year: null,
        pages: null
    },
    {
        title: "48 Laws Of Power",
        author: null,
        year: null,
        pages: null
    },
    {
        title: "48 Laws Of Power",
        author: null,
        year: null,
        pages: null
    },
    {
        title: "48 Laws Of Power",
        author: null,
        year: null,
        pages: null
    },
];

let newBook = prompt("какую книгу добавить в список?");

if(newBook !== null){
    bookTitles.push(newBook)
}

console.log(bookTitles)
