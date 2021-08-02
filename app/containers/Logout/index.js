import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import {AuthHelpers } from 'helpers';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import AppReducer from '../App/reducer';
import BrandReducer from '../OnBoarding/reducer';
import { clearUserSession } from '../App/actions';
import {  clearBrandData } from '../OnBoarding/actions';

const LogOut = (props) => {
    useInjectReducer({ key: 'app', reducer:AppReducer });
    useInjectReducer({ key: 'OnboardingContainer', reducer:BrandReducer });
    useEffect(() => {
        props.clearUserSession();
        AuthHelpers.logout('LAZY');
        toast.info('You have successfully logged out!');
    }, [])
    
    return null;
}

const mapDispatchToProps = dispatch => ({
    dispatch,
    clearUserSession: data => dispatch(clearUserSession(data)),
    clearBrandData: data => dispatch(clearBrandData(data)),
  });

const withConnect = connect(
    null,
    mapDispatchToProps,
  );

export default compose(
    withConnect,
)(LogOut)