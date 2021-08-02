/**
 * @description Auth helpers file to deal with all authentication related stuff.
 */

import { redirectToUrl, getAuthRoute } from 'utils/common';
import { APP_ROUTES } from 'utils/constants';
import history from 'utils/history';

const AuthHelpers = {
  isAuthenticated: () => !!localStorage.getItem('authenticationToken'),
  login: () => {
    // Add api for login
  },
  signup: () => {
    // addd api for signup
  },
  logout: (type) => {
    if(AuthHelpers.isAuthenticated()) {
      console.log(AuthHelpers.isAuthenticated())
      if(!type) {
         window.location.href = getAuthRoute();
      } else {
        redirectToUrl(getAuthRoute());
      }
      localStorage.removeItem('authenticationToken');
      localStorage.clear();
    }
  },
  saveTokenToLocalStorage: (token) => {
    localStorage.setItem('authenticationToken', token);
  },
  removeTokenFromLocalStorage: () => {
    localStorage.removeItem('authenticationToken');
  }
};

export default AuthHelpers;
