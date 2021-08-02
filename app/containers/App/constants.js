/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const TOGGLE_SIDEBAR = 'app/App/TOGGLE_SIDEBAR';
export const FETCH_USER_DATA = 'app/App/FETCH_USER_DATA'
export const SET_FETCH_USER_DATA = 'app/App/SET_FETCH_USER_DATA'
export const CLEAR_USER_SESSION = 'app/App/CLEAR_USER_SESSION'
export const VERIFY_EMAIL = 'app/App/VerifyEmail';
export const SET_VERIFY_EMAIL = 'app/App/setVerifyEmail';
export const EMAIL_VERIFIED_SUCCESS = 'app/App/VerifyEmailSuccess';
export const TRIGGER_BRAND_CHANGE = 'app/App/triggerBrandChange';
export const RESET_BRAND_CHANGE = 'app/App/resetBrandChange';
export const UPDATE_USER_PROFILE = 'app/App/UPDATE_USER_PROFILE';
