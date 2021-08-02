/*
 *
 * Reset password reducer
 *
 */
import produce from 'immer';
import { API_CONSTANTS } from 'utils/constants';
import {
  FORGOT_PASSWORD_SEND_EMAIL,
  FORGOT_PASSWORD_SEND_EMAIL_SUCCESS,
  RESET_PASSWORD,
  VERIFY_TOKEN,
  VERIFY_TOKEN_SUCCESS,
  RESET_PASSWORD_SUCCESS,
  DEFAULT_ACTION,
} from './constants';

export const initialState = {
  sendEmail : {
    data : null,
    status:null,
  },
  checkToken:{
    data:null,
    status : null,
  },
  passwordReset:{
    data:null,
    status:null,
  }
};

/* eslint-disable default-case, no-param-reassign */
const forgotPasswordReducer = (state = initialState, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case DEFAULT_ACTION:{
        draft.sendEmail.status=null;
        draft.checkToken.status=null;
        draft.passwordReset.status=null;
      }
      case FORGOT_PASSWORD_SEND_EMAIL:{
        draft.sendEmail.status = API_CONSTANTS.loading;
        break;
      }
      case FORGOT_PASSWORD_SEND_EMAIL_SUCCESS:{
        draft.sendEmail.data = payload.data;
        draft.sendEmail.status = payload.status;
        break;
      }
      case VERIFY_TOKEN:{
        draft.checkToken.status = API_CONSTANTS.loading;
        break;
      }
      case VERIFY_TOKEN_SUCCESS:{
        draft.checkToken.data = payload.data;
        draft.checkToken.status = payload.status;
        break;
      }
      case RESET_PASSWORD:{
        draft.passwordReset.status = API_CONSTANTS.loading;
        break;
      }
      case RESET_PASSWORD_SUCCESS:{
        draft.passwordReset.data = payload.data;
        draft.passwordReset.status = payload.status;
        break;
      }

    }
  });

export default forgotPasswordReducer;
