/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_BOOK,
  SAVE_BOOK,
  CHANGE_BOOKDATA,
  SAVE_BOOK_SUCCESS,
  DELETE_BOOK,
  LOAD_BOOK_SUCCESS,
  DELETE_BOOK_SUCCESS,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function changeBookData(payload) {
  return {
    type: CHANGE_BOOKDATA,
    payload,
  };
}
export function saveBook() {
  return {
    type: SAVE_BOOK,
  };
}
export function loadBook() {
  return {
    type: LOAD_BOOK,
  };
}
export function loadBookSuccess(payload) {
  return {
    type: LOAD_BOOK_SUCCESS,
    payload,
  };
}
export function deleteBook(payload) {
  return {
    type: DELETE_BOOK,
    payload,
  };
}
export function saveBookSuccess(payload) {
  return {
    type: SAVE_BOOK_SUCCESS,
    payload,
  };
}
export function deleteBookSuccess(payload) {
  return {
    type: DELETE_BOOK_SUCCESS,
    payload,
  };
}
