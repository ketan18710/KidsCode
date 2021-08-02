/*
 * FeaturePage
 *
 * List all the features
 */
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { redirectToUrl, getLastLocationVisited } from 'utils/common';
import PropTypes from 'prop-types';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { FormattedMessage } from 'react-intl';
import CommonMessages from 'helpers/Intl.CommonMessage';
import { API_CONSTANTS } from 'utils/constants';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {  } from './actions';
import makeSelectLoginContainer, {

} from './selectors';
import './style.scss';
import Login from 'components/Login';


const LoginContainer = props => {
  const { fullpath, pathname } = getLastLocationVisited(props.location);
  /**
   * Save Last location visited to session storage
   */
  if(fullpath || pathname) {
    sessionStorage.setItem('lastVisited', JSON.stringify({fullpath, pathname}));
  }
  const [response, setResponse] = useState(null);
  const [loginInProgress, setLogInProgress] = useState(null);
  return (
    <div className="main_login_wrapper">
      <Helmet>
        <title>
          Login
        </title>
        <meta name="description" content="Login page" />
      </Helmet>
      <Login
        handleLoginSubmit={data => console.log(data)}
        headerMessage={<FormattedMessage {...messages.Header} />}
        welcomeMessage={<FormattedMessage {...messages.WelcomeMessage} />}
        forgotMessage={<FormattedMessage {...CommonMessages.ForgotPassword} />}
        rememberMeMessage={<FormattedMessage {...CommonMessages.RememberMe} />}
        dontHaveAccountMessage={
          <FormattedMessage {...CommonMessages.DontHaveAccount} />
        }
        response={response}
        responseInProgress={loginInProgress}
        googleLogin={data => googleLogin(data)}
      />
    </div>
  );
};

LoginContainer.propTypes = {
  loginContainer: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({

});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'loginContainer', reducer });
const withSaga = injectSaga({ key: 'loginContainer', saga });

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(LoginContainer);
