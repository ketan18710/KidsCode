import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginContainer state domain
 */

const selectLoginContainer = state =>
  state.loginContainer || initialState;


const makeSelectLoginContainer = () => 
  createSelector(
    selectLoginContainer,
    substate => substate 
)
const makeSelectLoginData = () =>
    createSelector(
      selectLoginContainer,
      substate => substate.data
    )

const makeSelectLoginStatus = () =>
  createSelector(
    selectLoginContainer,
    substate => substate.status
)

const makeSelectLoginResponse = () =>
    createSelector(
      selectLoginContainer,
      substate => substate.loginResponse
    )

export default makeSelectLoginContainer;
export { 
  makeSelectLoginStatus,
  makeSelectLoginResponse,
  makeSelectLoginData,
};
