/*
 * Dashboard Container
 *
 *
 */
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { redirectToUrl } from 'utils/common';
import { APP_ROUTES } from 'utils/constants';
import reducer from './reducer';
import saga from './saga';
import './styles.scss';
import { getCodeResult } from './actions';
import { makeSelectCodeResult } from './selectors';
import VideoPlayer from '../../components/VideoPlayer';
import DashboardComp from '../../components/Dashboard';
const DashboardContainer = props => {
  const { codeResult, getCodeResult } = props;
  const activeTabConsts = {
    video: 'VIDEO',
    code: 'CODE',
  };
  const [activeTab, setActiveTab] = useState(activeTabConsts.code);
  useEffect(() => {});
  useEffect(() => {
    // props.defaultAction();
  }, []);
  return (
    <div className="main_dashboard">
      <Helmet>
        <title>KidCode-Dashbaord</title>
        <meta name="description" content="Dashboard page" />
      </Helmet>
      <>
        <Grid className="dashboard" container>
          <Grid item container className="sidebar" direction="column" lg={2}>
            <h1 onClick={() => redirectToUrl(APP_ROUTES.HOME)}>KidCode</h1>
            <h3
              onClick={() => setActiveTab(activeTabConsts.video)}
              className={activeTab === activeTabConsts.video ? 'active' : ''}
            >
              Video Player
            </h3>
            <h3
              onClick={() => setActiveTab(activeTabConsts.code)}
              className={activeTab === activeTabConsts.code ? 'active' : ''}
            >
              Code Editor
            </h3>
            <h3>Take a Quiz</h3>
            <h3>Daily Learning</h3>
            <h3>K-points</h3>
            <h3 className="">Help</h3>
            <h3 className="bottom">Logout</h3>
          </Grid>
          <Grid className="mainContent" item container lg={10}>
            <DashboardComp
              activeTab={activeTab}
              codeResult={codeResult}
              getCodeResult={data => getCodeResult(data)}
              activeTabConsts={activeTabConsts}
            />
          </Grid>
        </Grid>
      </>
    </div>
  );
};

DashboardContainer.propTypes = {
  DashboardContainer: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  codeResult: makeSelectCodeResult(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getCodeResult: data => dispatch(getCodeResult(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'DashboardContainer', reducer });
const withSaga = injectSaga({ key: 'DashboardContainer', saga });

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(DashboardContainer);
