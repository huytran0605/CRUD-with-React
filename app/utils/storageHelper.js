const saveDataToStorage = payload => {
  const books = JSON.parse(localStorage.getItem('books') || '[]');
  const targetIndexID = books.findIndex(book => book.id === payload.id);
  if (targetIndexID > -1) {
    books[targetIndexID] = payload;
  } else {
    books.push(payload);
  }
  localStorage.setItem('books', JSON.stringify(books));
};
const deleteDataToStorage = payload => {
  const books = JSON.parse(localStorage.getItem('books') || '[]');
  const newBookList = books.filter(book => book.id !== payload.id);
  localStorage.setItem('books', JSON.stringify(newBookList));
};
export { saveDataToStorage, deleteDataToStorage };
