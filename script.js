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