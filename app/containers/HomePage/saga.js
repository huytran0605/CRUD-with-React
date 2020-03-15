/**
 * Gets the repositories of the user from Github
 */

import { put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { loginSuccess } from './actions';
import { LOGIN_ACTION } from './constants';

/**
 * Github repos request/response handler
 */
export function* loginSaga(action) {
  // Select username from store
  const { userName, password } = action.payload;
  if (userName === 'demo' && password === 'demo') {
    localStorage.setItem('token', '12345');
    localStorage.setItem('username', userName);
    yield put(loginSuccess());
    yield put(push('books'));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOGIN_ACTION, loginSaga);
}
