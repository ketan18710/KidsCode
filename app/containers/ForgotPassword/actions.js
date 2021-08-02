/*
 *
 * LoginContainer actions
 *
 */

import {
    DEFAULT_ACTION,
    FORGOT_PASSWORD_SEND_EMAIL,
    FORGOT_PASSWORD_SEND_EMAIL_SUCCESS,
    VERIFY_TOKEN,
    VERIFY_TOKEN_SUCCESS,
    RESET_PASSWORD,
    RESET_PASSWORD_SUCCESS,
  } from './constants';
  
  export function defaultAction() {
    return {
      type: DEFAULT_ACTION,
    };
  }
  export const forgotPasswordSendEmail = data => ({
    type: FORGOT_PASSWORD_SEND_EMAIL,
    data,
  });
  export const forgotPasswordSendEmailSuccess = (data) => ({
    type: FORGOT_PASSWORD_SEND_EMAIL_SUCCESS,
    payload: data,
  });
  export const verifyToken = (data) =>({
    type : VERIFY_TOKEN,
    data,
  })
  export const verifyTokenSuccess =(data) =>({
    type : VERIFY_TOKEN_SUCCESS,
    payload : data,
  })
  export const resetPassword = (data) =>({
    type : RESET_PASSWORD,
    payload : data,
  })
  export const resetPasswordSuccess = (data) =>({
    type : RESET_PASSWORD_SUCCESS,
    payload : data,
  })
  