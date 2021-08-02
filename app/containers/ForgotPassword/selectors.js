import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the forgot password state domain
 */

const selectForgorPassContainer = state =>
  state.forgotPasswordContainer || initialState;


const makeSelectForgotPasswordContainer = () => 
  createSelector(
    selectForgorPassContainer,
    substate => substate 
)
const makeSelectForgotPasswordSendEmail = () =>
    createSelector(
      selectForgorPassContainer,
      substate => substate.sendEmail
    )
const makeSelectTokenVerification = () =>
createSelector(
  selectForgorPassContainer,
  substate => substate.checkToken
)
const makeSelectPasswordReset = () =>
    createSelector(
      selectForgorPassContainer,
      substate => substate.passwordReset
    )

export default makeSelectForgotPasswordContainer;
export { 
  selectForgorPassContainer,makeSelectForgotPasswordSendEmail,makeSelectTokenVerification,makeSelectPasswordReset
};
