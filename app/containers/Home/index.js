/**
 *
 * Home
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import './style.scss'
import HomeComponent from 'components/Home'

export function Home(props) {
  return (
    <div>
      <Helmet>
        <title>Kids Code</title>
        <meta name="description" content="Description of Home" />
      </Helmet>
      <HomeComponent {...props} />
    </div>
  );
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
  memo,
)(Home);
