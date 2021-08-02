/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const appState = state => state;

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectCurrentUser = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.userData,
  );

const makeSelectSidebar = () =>
    createSelector(
      selectGlobal,
      globalState => globalState.sidebarExpanded
    )

const makeSelectMainAppState = () => 
      createSelector(
        selectGlobal,
        globalState => globalState
      )
const makeSelectEmailVerify = () =>
createSelector(
  selectGlobal,
  substate => substate.emailVerify
)

const makeSelectBrandSwitch = () =>
  createSelector(
    selectGlobal,
    substate => substate.brandSwitched
  )

const makeSelectOriginalUserData = () =>
    createSelector(
      selectGlobal,
      substate => substate.originalUserData
    )
export {
  selectGlobal,
  makeSelectMainAppState,
  makeSelectCurrentUser,
  makeSelectSidebar,
  makeSelectEmailVerify,
  makeSelectBrandSwitch,
  makeSelectOriginalUserData,
};
