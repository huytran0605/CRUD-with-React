import { put, select, takeLatest } from 'redux-saga/effects';
import { saveDataToStorage, deleteDataToStorage } from 'utils/storageHelper';
import { saveBookSuccess, loadBookSuccess, deleteBookSuccess } from './actions';
import { makeSelectBook } from './selectors';
import { SAVE_BOOK, LOAD_BOOK, DELETE_BOOK } from './constants';
export function* saveBook() {
  const book = yield select(makeSelectBook());

  try {
    saveDataToStorage(book);
    yield put(saveBookSuccess(book));
  } catch (err) {
    // yield put(repoLoadingError(err));
  }
}
export function* loadBook() {
  const books = JSON.parse(localStorage.getItem('books') || '[]');
  try {
    yield put(loadBookSuccess(books));
  } catch (err) {
    // error
  }
}
export function* deleteBook(action) {
  try {
    deleteDataToStorage(action.payload);
    yield put(deleteBookSuccess(action.payload));
  } catch (err) {
    // error
  }
}
export default function* bookSaga() {
  yield takeLatest(SAVE_BOOK, saveBook);
  yield takeLatest(LOAD_BOOK, loadBook);
  yield takeLatest(DELETE_BOOK, deleteBook);
}
