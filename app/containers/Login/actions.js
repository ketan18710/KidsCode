/*
 *
 * LoginContainer actions
 *
 */

import {
    DEFAULT_ACTION,
    LOG_IN,
    LOG_OUT,
    SET_LOG_IN_SUCCESS,
    SET_LOG_IN_ERROR,
    GOOGLE_LOGIN,
    SET_GOOGLE_LOGIN,
  } from './constants';
  
  export function defaultAction() {
    return {
      type: DEFAULT_ACTION,
    };
  }
  
  export const login = data => ({
    type: LOG_IN,
    payload: data,
  });
  
  export const logout = () => ({
    type: LOG_OUT,
  });
  
  export const setLoginSuccess = data => ({
    type: SET_LOG_IN_SUCCESS,
    payload: data,
  });
  
  export const setLoginError = data => ({
    type: SET_LOG_IN_ERROR,
    payload: data,
  });
  
  export const googleLogin = data =>({
    type : GOOGLE_LOGIN,
    payload : data
  })
  export const setGoogleLogin = data =>({
    type : SET_GOOGLE_LOGIN,
    payload : data
  })