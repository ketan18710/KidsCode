import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginContainer state domain
 */

const selectDashbaordContainer = state =>
  state.DashboardContainer || initialState;


const makeSelectDashboardContainer = () => 
  createSelector(
    selectDashbaordContainer,
    substate => substate 
)


const makeSelectDashboard = () => 
  createSelector(
    selectDashbaordContainer,
    substate => substate 
)

const makeSelectCodeResult = () => 
  createSelector(
    selectDashbaordContainer,
    substate => substate.codeResult
)
export default makeSelectDashboardContainer;
export { 
  selectDashbaordContainer,
  makeSelectDashboard,
  makeSelectCodeResult,
};
