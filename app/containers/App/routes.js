/**
 * @description App router: All routes will land here
 */

import React, { useEffect,useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { toast } from 'react-toastify';
/**
 * @description Import all Components here
 */
import Login from 'containers/Login/Loadable';
import Home from 'containers/Home';
import AceEditor from 'components/AceEditor'
import Dashboard from 'containers/Dashboard'
/**
 * Helpers
 */
import UserHelpers from '../../helpers/UserHelpers';
import { AuthHelpers } from '../../helpers';
import { getUserData, extractParamsFromUrl, checkRegisterRedirection, getAuthRoute } from 'utils/common'
import { API_CONSTANTS, ONBOARDING_API_CONST, APP_PERMISSIONS, APP_ROUTES,ROUTE_CONTAINER_CONSTANTS, NAVIGAION_LABELS,ICONS } from 'utils/constants';
import { makeSelectCurrentUser } from './selectors';


/**
 * @description Container for adding and managing all routes
 */
const allRoutes = [
  {
    path: APP_ROUTES.HOME,
    exact: true,
    main: props =>
    <Home {...props} />,
      // !AuthHelpers.isAuthenticated() ? (
      // ) : (
      //   <Redirect to={APP_ROUTES.DASHBOARD} />
      // ),
    sidebar: props => <></>,
  },
  {
    path: APP_ROUTES.LOGIN,
    exact: true,
    main: props =>
    <Login {...props} />,
      // !AuthHelpers.isAuthenticated() ? (
      // ) : (
      //   <Redirect to={APP_ROUTES.DASHBOARD} />
      // ),
    sidebar: props => <></>,
  },
  {
    path: APP_ROUTES.EDITOR,
    exact: true,
    main: props =>
    <AceEditor {...props} />,
      // !AuthHelpers.isAuthenticated() ? (
      // ) : (
      //   <Redirect to={APP_ROUTES.DASHBOARD} />
      // ),
    sidebar: props => <></>,
  },
  {
    path: APP_ROUTES.DASHBOARD,
    exact: true,
    main: props =>
    <Dashboard {...props} />,
      // !AuthHelpers.isAuthenticated() ? (
      // ) : (
      //   <Redirect to={APP_ROUTES.DASHBOARD} />
      // ),
    sidebar: props => <></>,
  },

];


/**
 * @description Private route component
 */
const PrivateRoute = ({ component: Component, sidebar: Sidebar, ...rest }) => {
  const { } = rest;
  if(!AuthHelpers.isAuthenticated()) {
    redirectToUrl(APP_ROUTES.LOGIN)
  }

  return (
    <Route
      {...rest}
      render={props =>
            <>
              { sessionStorage.clear() }
              <Sidebar {...props} {...rest} />
              <>
                <div className={`root_app_container`}>
                  <Component  {...props} {...rest} />
                </div>
              </>
            </>
      }
    />
  );
};



// PropTypes
PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
};

// Render all routes
const AppRoutes = props => {
  
  return (
    <>
    <Switch>
      {allRoutes.map(route =>
          route.isProtected ? (
            <PrivateRoute
              {...props}
              alias={route.permissionAlias}
              routePerm={route.permission}
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.main}
              sidebar={route.sidebar}
              context={route.context}
            />
          ) : (
            <Route
              { ...props }
              key={route.path}
              exact={route.exact}
              path={route.path}
              component={(props) => route.main({...props, urlParams: extractParamsFromUrl() })}
            />
          )
      )}
      <Route component={()=><h2>Not Found</h2>} />
    </Switch>
    </>
  );
};

const mapStateToProps = createStructuredSelector({

});

const withConnect = connect(mapStateToProps);
export default compose(withConnect)(AppRoutes);
