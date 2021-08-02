import { call, put, takeLatest } from 'redux-saga/effects';
import { request, getResponseFromApiResponse } from 'utils/common';
import { PROD_DOMAIN } from 'utils/apiConfig';
import { API_CONSTANTS, HTTP_METHODS } from 'utils/constants';
import { AuthHelpers } from 'helpers' 
import { GOOGLE_LOGIN, LOG_IN } from './constants';

import { setLoginError, setLoginSuccess,setGoogleLogin } from  './actions';

import { fetchUserData } from '../App/actions';
export default function* loginContainerSaga() {
    yield takeLatest(LOG_IN, loginService);
    yield takeLatest(GOOGLE_LOGIN,googleLoginService)
}

/**
 * @description Login service
 */
function* loginService(data) {
    const { email, password } = data.payload;
    try {
        const loginAction =  yield call(
            request, 
            `${PROD_DOMAIN}/api/login`,
            {
                method: HTTP_METHODS.POST,
                body: JSON.stringify({
                    email,
                    password
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }
        );
        console.log('[Login Service API Status]', loginAction);
        const { response, status, statusCode } = loginAction;
        // localStorage.setItem('onboarded',JSON.stringify(loginAction.response.brand.data.onboarded)); 
        if(statusCode === 200) {
            AuthHelpers.saveTokenToLocalStorage(response.token);
             //Call user API
            yield put(fetchUserData());
            yield put(setLoginSuccess({ 
                status: API_CONSTANTS.success,
                data: getResponseFromApiResponse(loginAction)
            }));
            
        } else {
            yield put(setLoginError({ 
                status: API_CONSTANTS.error,
                data: getResponseFromApiResponse(loginAction)
            }))
        }
    } catch(err) {
        //Set error state
        console.log(err);
        yield put(setLoginError({ status: API_CONSTANTS.error}))
    }
}

function* googleLoginService(data){
    const { payload } = data;
    try {
        const loginAction =  yield call(
            request, 
            `${PROD_DOMAIN}/api/auth/google`,
            {
                method: HTTP_METHODS.POST,
                body: JSON.stringify(payload),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }
        );
        console.log('[Login Service API Status]', loginAction);
        const { response, status, statusCode } = loginAction;
        // localStorage.setItem('onboarded',JSON.stringify(loginAction.response.brand.data.onboarded)); 
        if(statusCode === 200) {
            AuthHelpers.saveTokenToLocalStorage(response.token);
             //Call user API
            yield put(fetchUserData());
            yield put(setLoginSuccess({ 
                status: API_CONSTANTS.success,
                data: getResponseFromApiResponse(loginAction)
            }));
            
        } else {
            yield put(setLoginError({ 
                status: API_CONSTANTS.error,
                data: getResponseFromApiResponse(loginAction)
            }))
        }
    } catch(err) {
        //Set error state
        yield put(setLoginError({ status: API_CONSTANTS.error}))
    }
}