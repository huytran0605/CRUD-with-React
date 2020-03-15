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

export const CHANGE_USER_NAME = 'twenti/Login/CHANGE_USER_NAME';
export const CHANGE_PASSWORD = 'twenti/Login/CHANGE_PASSWORD';
export const LOGIN_ACTION = 'twenti/Login/LOGIN_ACTION';
export const LOGIN_SUCCESS = 'twenti/Login/LOGIN_SUCCESS';
