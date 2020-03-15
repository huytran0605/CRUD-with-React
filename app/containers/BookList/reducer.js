import produce from 'immer';
import {
  CHANGE_BOOKDATA,
  SAVE_BOOK_SUCCESS,
  LOAD_BOOK_SUCCESS,
  DELETE_BOOK_SUCCESS,
} from './constants';

export const initialState = {
  bookList: [],
  book: { id: '', author: '', cate: '', year: '' },
};
/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_BOOK_SUCCESS: {
        draft.bookList = action.payload;
        break;
      }
      case CHANGE_BOOKDATA:
        draft.book = action.payload;
        break;
      case DELETE_BOOK_SUCCESS: {
        const { payload } = action;
        const { bookList } = state;
        const bookListNew = bookList.filter(book => book.id !== payload.id);
        draft.bookList = bookListNew;
        break;
      }
      case SAVE_BOOK_SUCCESS: {
        const { payload } = action;
        const { bookList } = state;
        const targetIndex = bookList.findIndex(book => book.id === payload.id);
        if (targetIndex > -1) {
          bookList[targetIndex] = payload;
          draft.bookList = bookList;
        } else {
          draft.bookList = [...state.bookList, action.payload];
        }
        draft.book = { id: '', author: '', cate: '', year: '' };
        break;
      }
    }
  });

export default homeReducer;
