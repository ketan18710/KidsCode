/*
 *
 * Dashboard actions
 *
 */

import {
  SET_ACTIVE_TAB,
  UPDATE_PROFILE,
  UPDATE_PROFILE_RESULT,
  GET_CODE_RESULT,
  SET_CODE_RESULT,
  DEFAULT_ACTION
} from './constants';
  
  // export function defaultAction() {
  //   return {
  //     type: DEFAULT_ACTION,
  //   };
  // }
  
  // export const setActiveTab = data => ({
  //   type: SET_ACTIVE_TAB
  // });
  
  // export const updateProfile = data => ({
  //   type: UPDATE_PROFILE,
  //   payload: data
  // });
  // export const updateProfileResult = data => ({
  //   type: UPDATE_PROFILE_RESULT,
  //   payload: data
  // });
  export const getCodeResult = data => ({
    type: GET_CODE_RESULT,
    payload: data
  });
  export const setCodeResult = data => ({
    type: SET_CODE_RESULT,
    payload: data
  });