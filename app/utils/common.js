import history from 'utils/history';
import { useLocation } from 'react-router-dom';
export const redirectToUrl = (endpoint = null) => {
  endpoint ? history.push(endpoint) : null;
}
export const request = (url, options) => {
  if (options.headers) {
    Object.assign(options.headers, { Accept: 'application/json' })
  }
  return fetch(url, {
    ...options,
    mode: 'cors',
  })
    .then(response => response.json() || response)
    .then(json => json)
    .catch(err => ({ err }));
};
export const getLastLocationVisited = (location) => {
  return {
    fullpath: location && location.state && location.state.from && `${location.state.from.pathname}${location.state.from.search || ''}`,
    pathname: location && location.state && location.state.from && location.state.from.pathname
  }
}
export const extractParamsFromUrl = () => {
  const params = new URLSearchParams(history.location.search ? history.location.search: history.location.state && history.location.state.from.search ? history.location.state.from.search: parseSessionStorage('firstVisit') && parseSessionStorage('firstVisit').search);
  let obj = {};
  for(let value of params.keys()) {
    obj[value] = params.get(value);
  }
  return obj;
}

export const parseSessionStorage = (key) => {
  return JSON.parse(sessionStorage.getItem(key));
}
