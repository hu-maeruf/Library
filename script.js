const myLibrary = [];

function Book(title, author, pageNumber, bookStatus) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pageNumber = pageNumber;
  this.bookStatus = bookStatus;
}

const button = document.getElementById("button");

button.addEventListener("click", addBookToLibrary)

function addBookToLibrary() {
  const bookTitle = document.getElementById("title").value;
  const bookAuthor = document.getElementById("author").value;
  const bookPages = document.getElementById("pageNumber").value;
  let selectedRadio = document.querySelector("input[name='bookStatus']:checked");
  let bookStatus;
  if (selectedRadio === null) {
    bookStatus = "No";
  } else {
    bookStatus = selectedRadio.value;
  }
  const newBook = new Book(bookTitle, bookAuthor, bookPages, bookStatus);
  myLibrary.push(newBook);
}