import { call, put, takeLatest } from 'redux-saga/effects';
import { request, getResponseFromApiResponse } from 'utils/common';
import { PROD_DOMAIN } from 'utils/apiConfig';
import { API_CONSTANTS, HTTP_METHODS } from 'utils/constants';
import { AuthHelpers } from 'helpers' 
import {  FORGOT_PASSWORD_SEND_EMAIL, VERIFY_TOKEN ,RESET_PASSWORD} from './constants';
import { forgotPasswordSendEmailSuccess,resetPasswordSuccess,verifyTokenSuccess } from './actions';


export default function* forgotPasswordContainerSaga() {
    yield takeLatest(FORGOT_PASSWORD_SEND_EMAIL,forgotPasswordSendEmail);
    yield takeLatest(VERIFY_TOKEN,verifyToken);
    yield takeLatest(RESET_PASSWORD,resetPassword);
}

/**
 * @description forgot password service
 */
function* forgotPasswordSendEmail(data) {
    try{
        const emailResponse =  yield call(
          request, 
          `${PROD_DOMAIN}/api/forgot-password`,
          {
              method: HTTP_METHODS.POST,
              headers: {
                  'Content-type': 'application/json; charset=UTF-8',
              },
              body:JSON.stringify(data.data)
          }
        ); console.log(emailResponse)
        if (emailResponse.status){
          yield put(
            forgotPasswordSendEmailSuccess({
              status: API_CONSTANTS.success,
              data : (getResponseFromApiResponse(emailResponse)) ,
            }),
          );
        } 
        else if(emailResponse.statusCode === 401) {
         AuthHelpers.logout();
        }
        else {
          yield put(
            //need to properly define what part of error body to be shown
            forgotPasswordSendEmailSuccess({
              status: API_CONSTANTS.error,
              data: getResponseFromApiResponse(emailResponse),
            })
          );
        }
      }catch (err) {
        // Set error state
        console.log(err);
        yield put(forgotPasswordSendEmailSuccess({ status: API_CONSTANTS.error }));
      }  
}
function* verifyToken(data) {
    try{
        const { token } = data.data
        const tokenResponse =  yield call(
          request, 
          `${PROD_DOMAIN}/api/reset-password?token=${token}`,
          {
              method: HTTP_METHODS.GET,
              headers: {
                  'Content-type': 'application/json; charset=UTF-8',
              },
          }
        ); console.log(tokenResponse)
        if (tokenResponse.status){
          yield put(
            verifyTokenSuccess({
              status: API_CONSTANTS.success,
              data : (getResponseFromApiResponse(tokenResponse)) ,
            }),
          );
        } 
        else if(tokenResponse.statusCode === 401) {
         // AuthHelpers.logout();
        }
        else {
          yield put(
            //need to properly define what part of error body to be shown
            verifyTokenSuccess({
              status: API_CONSTANTS.error,
              data: getResponseFromApiResponse(tokenResponse),
            })
          );
        }
      }catch (err) {
        // Set error state
        console.log(err);
        yield put(verifyTokenSuccess({ status: API_CONSTANTS.error }));
      }  
}
function* resetPassword(data){
    try{
        //const { data } = data;
        const resetPassResponse =  yield call(
          request, 
          `${PROD_DOMAIN}/api/reset-password`,
          {
              method: HTTP_METHODS.POST,
              headers: {
                  'Content-type': 'application/json; charset=UTF-8',
              },
              body : JSON.stringify(data.payload)
          }
        ); console.log(resetPassResponse)
        if (resetPassResponse.status){
          yield put(
            resetPasswordSuccess({
              status: API_CONSTANTS.success,
              data : (getResponseFromApiResponse(resetPassResponse)) ,
            }),
          );
        } 
        else if(resetPassResponse.statusCode === 401) {
          AuthHelpers.logout();
        }
        else {
          yield put(
            //need to properly define what part of error body to be shown
            resetPasswordSuccess({
              status: API_CONSTANTS.error,
              data: getResponseFromApiResponse(resetPassResponse),
            })
          );
        }
      }catch (err) {
        // Set error state
        console.log(err);
        yield put(resetPasswordSuccess({ status: API_CONSTANTS.error }));
      }  
}