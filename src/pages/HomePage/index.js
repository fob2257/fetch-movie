import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getDemoRequest } from '../../redux/actions/demoActions';

import User from '../../components/User';

let willMount = true;

const HomePage = ({ users, getDemoRequest }) => {
  if (willMount) getDemoRequest('hey');

  useEffect(() => {
    willMount = false;
  }, []);

  return (
    <div>
      {users.map((value, i) => (
        <User key={i} {...value} />
      ))}
    </div>
  );
};

HomePage.propTypes = {
  users: PropTypes.array,
  getDemoRequest: PropTypes.func
};

HomePage.defaultProps = {
  users: [],
  getDemoRequest: f => f
};

const mapStateToProps = state => ({
  users: state.demo
});

const mapDispatchToProps = dispatch => ({
  getDemoRequest: payload => dispatch(getDemoRequest(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
