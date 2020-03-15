/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLogin = state => state.login || initialState;

const selectPassword = () =>
  createSelector(
    selectLogin,
    loginState => loginState.password,
  );
const selectUserName = () =>
  createSelector(
    selectLogin,
    loginState => loginState.userName,
  );

export { selectLogin, selectPassword, selectUserName };
