/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_BOOKDATA = 'twenty/Book/CHANGE_BOOKDATA';
export const SAVE_BOOK = 'twenty/Book/SAVE_BOOK';
export const SAVE_BOOK_SUCCESS = 'twenty/Book/SAVE_BOOK_SUCCESS';
export const DELETE_BOOK = 'twenty/Book/DELETE_BOOK';
export const LOAD_BOOK = 'twenty/Book/LOAD_BOOK';
export const LOAD_BOOK_SUCCESS = 'twenty/Book/LOAD_BOOK_SUCCESS';
export const DELETE_BOOK_SUCCESS = 'twenty/Book/DELETE_BOOK_SUCCESS';
