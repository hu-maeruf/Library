let myLibrary = [];

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

const addBook = document.getElementById("showDialog");
const confrimButton = document.getElementById("confirmBtn");
const dialog = document.getElementById("dialog-box");

addBook.addEventListener("click", () => {
  dialog.showModal();
})
confrimButton.addEventListener("click", addBookToLibrary);

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
  displayBooks();
  const form = document.getElementById("formId");
  form.reset();
  dialog.close();
}

const container = document.getElementById("library-display");
function displayBooks() {
  // When displayBook() run more than once you will get duplicate cards so to we will clear the container first
  container.innerHTML = "";
  for (const book of myLibrary) {
    const card = document.createElement("div");
    const uniqueId = book.id;
    console.log(uniqueId);
    card.className = "card";

    const title = document.createElement("h1");
    title.textContent = book.title;
    const author = document.createElement("p");
    author.textContent = "Author Name: " + book.author;
    const pageNumber = document.createElement("p");
    pageNumber.textContent = "Page Number: " + book.pageNumber;
    const readStatus = document.createElement("p");
    readStatus.textContent = book.bookStatus;
    const removeBook = document.createElement("button");
    removeBook.className = "remove";
    removeBook.textContent = "Remove Book";

    removeBook.addEventListener("click", () => {
      myLibrary = myLibrary.filter((book) => book.id !== uniqueId);
      displayBooks();
    });

    card.append(title, author, pageNumber, readStatus, removeBook);
    container.appendChild(card);
  }
};
displayBooks();