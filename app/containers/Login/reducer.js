/*
 *
 * LoginContainer reducer
 *
 */
import produce from 'immer';
import { API_CONSTANTS } from 'utils/constants';
import {
  LOG_IN,
  LOG_OUT,
  SET_LOG_IN_ERROR,
  SET_LOG_IN_SUCCESS
} from './constants';

export const initialState = {
  data: null,
  status: API_CONSTANTS.init,
  loginResponse: '',
};

/* eslint-disable default-case, no-param-reassign */
const loginContainerReducer = (state = initialState, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case LOG_IN: {
        draft.status = API_CONSTANTS.loading;
        draft.loginResponse = null;
        break;
      }
      case SET_LOG_IN_SUCCESS: {
        draft.status = payload.status;
        draft.data = payload.data;
        break;
      }
      case SET_LOG_IN_ERROR:{
        draft.status = payload.status;
        draft.loginResponse = payload.data;
        break;
      }
      case LOG_OUT: {
        draft.status = API_CONSTANTS.init;
        draft.user = null;
        draft.loginResponse = null;
        break;
      }
    }
  });

export default loginContainerReducer;
