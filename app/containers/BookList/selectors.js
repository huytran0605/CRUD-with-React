import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectBook = state => state.book || initialState;

const makeSelectBook = () =>
  createSelector(
    selectBook,
    state => state.book,
  );
const makeSelectBookList = () =>
  createSelector(
    selectBook,
    state => state.bookList,
  );

export { selectBook, makeSelectBook, makeSelectBookList };
