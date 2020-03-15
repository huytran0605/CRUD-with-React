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
  CHANGE_PASSWORD,
  CHANGE_USER_NAME,
  LOGIN_ACTION,
  LOGIN_SUCCESS,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export const changeUserName = payload => ({
  type: CHANGE_USER_NAME,
  payload,
});

export const changePassword = payload => ({
  type: CHANGE_PASSWORD,
  payload,
});
export const loginAction = payload => ({
  type: LOGIN_ACTION,
  payload,
});
export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload,
});
