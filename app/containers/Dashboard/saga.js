import { call, put, takeLatest } from 'redux-saga/effects';
import {
  request,
  getErrorMessage,
  getResponseFromApiResponse,
} from 'utils/common';
import { PROD_DOMAIN } from 'utils/apiConfig';
import { API_CONSTANTS, HTTP_METHODS } from 'utils/constants';
import { structureCountriesList } from './schema';
import { GET_CODE_RESULT } from './constants';

import { setCodeResult } from './actions';

export default function* dashboardContainerSaga() {
  yield takeLatest(GET_CODE_RESULT, getCodeResultFunc);
  // yield takeLatest(GET_COUNTRIES,getCountryFunc)
}

/**
 * @description Dashbaord services
 */

function* getCodeResultFunc({ payload }) {
  console.log('payload', payload);
  try {
    const result = yield call(request, `${PROD_DOMAIN}/data/python`, {
      method: HTTP_METHODS.POST,
      body: {},
      body: JSON.stringify({
        data: payload,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      },
    });
    const { statusCode, data } = result;
    // debugger
    if (statusCode === 200) {
      yield put(
        setCodeResult({
          status: API_CONSTANTS.success,
          data,
        }),
      );
    } else {
      yield put(
        setCodeResult({
          status: API_CONSTANTS.error,
          data,
        }),
      );
    }
  } catch (err) {
    // Set error state
    console.log('err', err);
    yield put(
      setCodeResult({
        status: API_CONSTANTS.error,
        data: err,
      }),
    );
    // yield put(AddContactListError({ status: API_CONSTANTS.error, data: postdata.statusCode, }));
  }
}
