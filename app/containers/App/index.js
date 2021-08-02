/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages.
 */
import React, { useEffect,useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import injectSaga from 'utils/injectSaga';
//import {fetchUserData} from './actions'
import saga from './saga';
import AppRoutes from './routes';
import {  } from './actions';
import {  } from './selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../index.scss';
import { } from 'utils/constants';
import { toast } from 'react-toastify';
import './style.scss'
/**
 * @description Main app Compoent to handle all private and public routes
 */
const App = (props) => {

  return (
    <>
      {/* <ToastContainer /> */}
      <div className='main_app_box'>
        <ToastContainer
              position="top-right"
              hideProgressBar
              autoClose={3000}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
        />
        
        <AppRoutes 
        />
      </div>
    </>
  );
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

// Intialize saga
const withSaga = injectSaga({ key: 'app', saga });

// Prop Types
App.propTypes = {};

export default withRouter(
  compose(
    withSaga,
    withConnect,
  )(App),
);
