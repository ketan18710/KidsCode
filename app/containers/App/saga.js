import { call, put, takeLatest } from 'redux-saga/effects';
import { EMAIL_VERIFIED_SUCCESS, FETCH_USER_DATA, VERIFY_EMAIL  } from './constants';
import { setFetchUserData,setVerifyEmail  } from './actions';
import { API_CONSTANTS, HTTP_METHODS, routeToExcludeForUserProfileApi } from 'utils/constants';
import { request, getResponseFromApiResponse,getErrorMessage, checkRoute } from 'utils/common';
import { PROD_DOMAIN } from 'utils/apiConfig';
import { structureApiResponse  } from './schema';
import { AuthHelpers } from 'helpers' 
// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/App/saga.js
  yield takeLatest(FETCH_USER_DATA, fetchUserProfile);
  yield takeLatest(VERIFY_EMAIL,verifyEmail);  
  yield takeLatest(EMAIL_VERIFIED_SUCCESS,emailVerifiedSuccess)
}


function* fetchUserProfile(data){
  try{
    const userData =  yield call(
      request, 
      `${PROD_DOMAIN}/api/me`,
      {
          method: HTTP_METHODS.GET,
          headers: {
              'Content-type': 'application/json; charset=UTF-8',
          },
      }
    ) 
    if (userData.status){
      yield put(
        setFetchUserData({
          status: API_CONSTANTS.success,
          data : structureApiResponse(getResponseFromApiResponse(userData)),
          originalData: getResponseFromApiResponse(userData)
        }),
      );
    } 
    else if(userData.statusCode === 401) {
      if(!checkRoute()) {
        AuthHelpers.logout('LAZY');
      }
    }
    else {
      yield put(
        //need to properly define what part of error body to be shown
        setFetchUserData({
          status: API_CONSTANTS.error,
          data: getResponseFromApiResponse(userData),
        })
      );
    }
  }catch (err) {
    // Set error state
    console.log(err);
    yield put(setFetchUserData({ status: API_CONSTANTS.error }));
  }
}
// verify email for activation //
function* verifyEmail(data){
  try {//debugger
      const emailVerify =  yield call(request,  `${PROD_DOMAIN}/api/verify-resend`,
        {
          method: HTTP_METHODS.GET,
          //body: JSON.stringify(data.payload),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
    )      
    const { statusCode } = emailVerify;
    if(statusCode === 200) {
        yield put(setVerifyEmail({ 
            status: API_CONSTANTS.success,
            data : getResponseFromApiResponse(emailVerify)
        }));
    } else {  
      yield put(setVerifyEmail({ 
          status: API_CONSTANTS.error,
          data: getErrorMessage(getResponseFromApiResponse(emailVerify))
      }))
    }
  } catch (err) {
      // Set error state
      yield put(setVerifyEmail({ 
        status: API_CONSTANTS.error,
        data: err
      }))
      // yield put(AddContactListError({ status: API_CONSTANTS.error, data: postdata.statusCode, }));
    }
}
//const email verified success 
function* emailVerifiedSuccess () {
  try {
      const email_verify = yield call(request, `${PROD_DOMAIN}/api/email-verified`,
        {
          method: HTTP_METHODS.POST,
          //body: JSON.stringify(data.payload),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
  )   
  //console.log(email_verify)   
} catch (err) {
    // Set error state
    
    // yield put(AddContactListError({ status: API_CONSTANTS.error, data: postdata.statusCode, }));
  }
}
