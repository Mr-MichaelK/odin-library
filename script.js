const bookNameInput   = document.querySelector("#bookname");
const authorNameInput = document.querySelector("#authorname");
const pageCountInput  = document.querySelector("#numpages");
const readCheckbox    = document.querySelector("#hasread");
const addBookButton   = document.querySelector(".add");
const form            = document.querySelector("form");
const grid            = document.querySelector(".grid");

addBookButton.addEventListener("click", () => {
    if (bookNameInput.value && authorNameInput.value && pageCountInput.value) {
        addBookToLibrary();
        let book = library[library.length - 1];
        displayBook(book);
    }
});

const library = [];

function Book(bookName, authorName, pageCount, isRead) {
    this.bookName   = bookName;
    this.authorName = authorName;
    this.pageCount  = pageCount;
    this.isRead    = isRead;
}

function addBookToLibrary() {
    let bName  = bookNameInput.value;
    let aName  = authorNameInput.value;
    let pCount = pageCountInput.value;
    let isRead = readCheckbox.checked;
    library.push(new Book(bName, aName, pCount, isRead));

    resetInput();
}

function resetInput() {
    bookNameInput.value   = "";
    authorNameInput.value = "";
    pageCountInput.value  = "";
    readCheckbox.checked  = false;
}

function displayBook(book) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book');

    bookCard.innerHTML = `
        <h4 class="title">${book.bookName}</h4>
        <p class="author">by ${book.authorName}</p>
        <p class="pagenumber">Page Count: ${book.pageCount}</p>
        <button class="read">${book.isRead ? 'Read' : 'Unread'}</button>
        <button class="remove">'Remove'</button>
    `;
    
    const readButton = bookCard.querySelector(".read");
    const removeButton = bookCard.querySelector(".remove");
    readButton.addEventListener("click", () => {
        readButton.textContent === "Read" ? readButton.textContent = "Unread" :
                                    readButton.textContent = "Read";
    });
    removeButton.addEventListener("click", () => {
        bookCard.remove();
    })

    grid.appendChild(bookCard);
}