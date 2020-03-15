/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { CHANGE_USER_NAME, CHANGE_PASSWORD } from './constants';

// The initial state of the App
export const initialState = {
  userName: '',
  password: '',
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USER_NAME:
        draft.userName = action.payload;
        break;
      case CHANGE_PASSWORD:
        draft.password = action.payload;
        break;
    }
  });

export default loginReducer;
