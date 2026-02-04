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

const theBookofAssistance = new Book("The Book of Assistance", "Imam ‘Abdallah ibn ‘Alawi al-Haddad", 152, "not read");
myLibrary.push(theBookofAssistance)
const reclaimYourHeart = new Book("Reclaim Your Heart", "Yasmin Mogahed", 192, "not read");
myLibrary.push(reclaimYourHeart)
const theAlchemist = new Book("The Alchemist", "Paulo Coelho", 177, "not read");
myLibrary.push(theAlchemist)

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