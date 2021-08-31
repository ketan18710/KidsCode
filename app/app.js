/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import history from 'utils/history';


import { PLATFORM_ASSETS } from 'utils/constants';
// import 'sanitize.css/sanitize.css';

// Import root app
import App from 'containers/App';
import AppError from 'containers/AppError';
import Dashboard from 'containers/Dashboard';


// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// Load the favicon and the .htaccess file
import '!file-loader?name=[name].[ext]!./images/favicon.png';
import 'file-loader?name=.htaccess!./.htaccess'; // eslint-disable-line import/extensions

import { deleteCacheFiles } from 'utils/cacheHelper';
import configureStore from './configureStore';

// Import i18n messages
import { translationMessages } from './i18n';

const versionJSON = require('../version.json');


// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
// const openSansObserver = new FontFaceObserver('Open Sans', {});

// // When Open Sans is loaded, add a font-family using Open Sans to the body
// openSansObserver.load().then(() => {
//   document.body.classList.add('fontLoaded');
// });

// Create redux store with history


class ErrorManage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return <AppError />;
    }
    return this.props.children;
  }
}

const checkVersionAndValidateCache = () => {
  // Check Build Env)

  // Check App version
  const oldAppversion = localStorage.getItem('APP_VERSION');
  if (!oldAppversion) {
    localStorage.setItem('APP_VERSION', versionJSON.version);
  } else {
    const isNewVersion = versionJSON.version === oldAppversion;
    if (!isNewVersion) {
      if (caches) {
        caches.keys().then(c => {
          for (const name of c) caches.delete(name);
        });
      }
      localStorage.setItem('APP_VERSION', versionJSON.version);
      window.location.reload(true);
    }
  }
};

const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

if(process.env.API_ENV === 'production') {
  console.log = function() { }
}

const render = messages => {

  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <ConnectedRouter history={history}>
          <ErrorManage>
            <App />
          </ErrorManage>
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() =>
      Promise.all([
        import('intl/locale-data/jsonp/en.js'),
        import('intl/locale-data/jsonp/de.js'),
      ]),
    ) // eslint-disable-line prettier/prettier
    .then(() => render(translationMessages))
    .catch(err => {
      throw err;
    });
} else {
  render(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  const runtime = require('offline-plugin/runtime'); // eslint-disable-line global-require
  runtime.install({
    onUpdating: () => {
      // NProgress.start();
    },
    onUpdateReady: () => {
      runtime.applyUpdate();
    },
    onUpdated: () => {
      // NProgress.done(true);
      deleteCacheFiles();
      // setTimeout(() => {
      //   window.location.reload();
      // }, 100);
    },
    onUpdateFailed: () => {
      console.log('SW Event:', 'onUpdateFailed');
    },
  });
}
