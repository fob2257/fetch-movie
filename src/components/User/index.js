import React from 'react';
import PropTypes from 'prop-types';

const User = ({ age, facebook, id, last_name, name, phone }) => (
  <div>
    <h2>{`${id} - ${name} ${last_name}`}</h2>
    <h3>{`Facebook: ${facebook}`}</h3>
    <h3>{`Age: ${age}`}</h3>
    <h3>{`Phone: ${phone}`}</h3>
  </div>
);

User.propTypes = {
  age: PropTypes.any,
  facebook: PropTypes.any,
  id: PropTypes.any,
  last_name: PropTypes.any,
  name: PropTypes.any,
  phone: PropTypes.any
};

export default User;
