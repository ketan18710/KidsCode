/*
 * App Actions
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

import { TOGGLE_SIDEBAR, FETCH_USER_DATA, SET_FETCH_USER_DATA, CLEAR_USER_SESSION,  VERIFY_EMAIL,
    SET_VERIFY_EMAIL, TRIGGER_BRAND_CHANGE,
    RESET_BRAND_CHANGE,
    EMAIL_VERIFIED_SUCCESS,
    UPDATE_USER_PROFILE,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
    export const toggleSidebar = data => ({
        type: TOGGLE_SIDEBAR,
        payload: data
    })
export const fetchUserData = data => ({
    type: FETCH_USER_DATA,
    payload: data
})

export const setFetchUserData = data => ({
    type: SET_FETCH_USER_DATA,
    payload: data
})

export const clearUserSession = data => ({
    type: CLEAR_USER_SESSION,
})

export const verifyEmail = () => ({
    type:VERIFY_EMAIL,
  });
  
export const setVerifyEmail = (data) => ({
    type : SET_VERIFY_EMAIL,
    payload:data,
  })

export const emailVerifiedSuccess = () =>({
    type : EMAIL_VERIFIED_SUCCESS,
})

export const triggerBrandChange = (data) => ({
    type: TRIGGER_BRAND_CHANGE,
    payload: data
})

export const resetSwitchBrandChange = () => ({
    type: RESET_BRAND_CHANGE
})

export const updateUserProfile = (data) => ({
    type: UPDATE_USER_PROFILE,
    payload:data
})