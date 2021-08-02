/*
 * FeaturePage
 *
 * List all the features
 */
import React, { useEffect,useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import PropTypes from 'prop-types';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import CommonMessages from 'helpers/Intl.CommonMessage';
import { forgotPasswordSendEmail,verifyToken,resetPassword, defaultAction } from './actions'
import { API_CONSTANTS, CONTAINERS_META_TITLE } from 'utils/constants';
import { makeSelectForgotPasswordSendEmail,makeSelectTokenVerification,makeSelectPasswordReset } from './selectors';
import { redirectToUrl } from 'utils/common';
import { toast } from 'react-toastify';
import './style.scss';

const { ACCOUNT: { FORGOT_PASSWORD, RESET_PASSWORD }} = CONTAINERS_META_TITLE;
const ForgotPasswordContainer = (props) => {
  const [authToken,setAuthToken] = useState(null);

  return (
    <div className='forgot_pass_wrapper'>
      <Helmet>
        <title>
          {
            props.flag && authToken ? `${RESET_PASSWORD}` : `${FORGOT_PASSWORD}`
          }
          
        </title>
        <meta name="description" content="Login page" />
      </Helmet>
        {props.flag && authToken ?
        <ResetPassword
          resetPassword = {(data)=>props.resetPassword(data)}
          verifyTokenSelector={props.verifyTokenSelector}
          resetPasswordSelector = {props.resetPassSelector}
          returnToLoginMessage={ <FormattedMessage  { ...messages.ReturnToLogin } /> }
          headerMessage = { <FormattedMessage { ...messages.PasswordResetHeader } /> }
          descriptionMessage = { <FormattedMessage { ...messages.PasswordResetDescription } /> }
        /> 
        :
        <ForgotPassword 
          verifyTokenSelector={props.verifyTokenSelector}
          headerMessage = { <FormattedMessage { ...messages.Header } /> }
          welcomeMessage={ <FormattedMessage  { ...messages.WelcomeMessage } /> }
          returnToLoginMessage={ <FormattedMessage  { ...messages.ReturnToLogin } /> }
          emailSendDoneHeader={ <FormattedMessage  { ...messages.EmailSendDoneHeader } /> }
          emailSendDoneDescription={ <FormattedMessage  { ...messages.EmailSendDoneDescription } /> }
          sendEmail = {(data)=>props.forgotPasswordSendEmail(data)}
          forgotPasswordEmailSelector = {props.forgotPasswordEmailSelector}
        />
        }
    </div>
  )
};

ForgotPasswordContainer.propTypes = {

};

const mapStateToProps = createStructuredSelector({
  forgotPasswordEmailSelector : makeSelectForgotPasswordSendEmail(),
  verifyTokenSelector : makeSelectTokenVerification(),
  resetPassSelector : makeSelectPasswordReset(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    defaulAction:()=>dispatch(defaultAction()),
    forgotPasswordSendEmail : (data) => dispatch(forgotPasswordSendEmail(data)),
    verifyToken : (data) => dispatch(verifyToken(data)),
    resetPassword : (data) => dispatch(resetPassword(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'forgotPasswordContainer', reducer });
const withSaga = injectSaga({ key: 'forgotPasswordContainer', saga });

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(ForgotPasswordContainer);
