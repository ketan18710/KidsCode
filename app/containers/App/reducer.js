/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  TOGGLE_SIDEBAR,
  FETCH_USER_DATA,
  SET_FETCH_USER_DATA,
  CLEAR_USER_SESSION,
  VERIFY_EMAIL,
  SET_VERIFY_EMAIL,
  TRIGGER_BRAND_CHANGE,
  RESET_BRAND_CHANGE,
  UPDATE_USER_PROFILE
} from './constants';
import { API_CONSTANTS } from 'utils/constants';
// The initial state of the App
export const initialState = {
  userData: {
    data:null,
    status:null
  },
  originalUserData:{
    data:null
  },
  emailVerify:{
    data : null,
    status :null,
  },
  sidebarExpanded: false,
  brandSwitched: null,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case TOGGLE_SIDEBAR:
        draft.sidebarExpanded = payload.expand
        break;
      case FETCH_USER_DATA :
        draft.userData.data = null;
        draft.userData.status = API_CONSTANTS.loading;
        break;
      case SET_FETCH_USER_DATA:
        draft.userData.data = payload.data;
        draft.userData.status = payload.status;
        draft.originalUserData.data = payload.originalData
        break;
      case CLEAR_USER_SESSION:
        draft.userData.data = null;
        draft.userData.status = null;
        draft.originalUserData.data = null;
        break;
      case VERIFY_EMAIL : {
        draft.emailVerify.status = API_CONSTANTS.loading;
        break;
      }
      case SET_VERIFY_EMAIL:{
        draft.emailVerify.status= payload.status;
        draft.emailVerify.data = payload.data;
        break;
      }
      case TRIGGER_BRAND_CHANGE: {
        draft.userData.data = payload && payload.userData
        draft.userData.status = draft.userData.status;
        draft.brandSwitched = true;
        break;
      }
      case UPDATE_USER_PROFILE:{
        draft.userData.data = payload && payload.data
        break;
      }
      case RESET_BRAND_CHANGE: {
        draft.brandSwitched = false;
      }
    }
  });

export default appReducer;
