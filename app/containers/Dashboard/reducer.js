/*
 *
 * LoginContainer reducer
 *
 */
import produce from 'immer';
import { API_CONSTANTS } from 'utils/constants';
import {
  SET_ACTIVE_TAB,
  UPDATE_PROFILE,
  UPDATE_PROFILE_RESULT,
  GET_CODE_RESULT,
  SET_CODE_RESULT,
  DEFAULT_ACTION
} from './constants';

export const initialState = {
  codeResult : {
    data:null,
    status:null
  },
};

/* eslint-disable default-case, no-param-reassign */
const dashboardContainerReducer = (state = initialState, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      // case DEFAULT_ACTION:{
      //   draft.updateProfile.status = null
      //   draft.updateProfile.data = null
      //   draft.countries.status = null
      //   break;
      // }
      // case SET_ACTIVE_TAB:{
      //   break;
      // } 
      case GET_CODE_RESULT: {
        draft.codeResult.status = API_CONSTANTS.loading;
        break;
      }
      case SET_CODE_RESULT: {
        draft.codeResult.status =  payload.status;
        draft.codeResult.data   =  payload.data;
        break;
      }
    }
  });

export default dashboardContainerReducer;
