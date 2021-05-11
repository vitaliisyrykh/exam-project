import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ roles, ...rest }) => {
  const {
    user,
    isFetching,
    error,
  } = useSelector(state => state.auth);

  if (user) {
    if (roles.includes(user.role)) {
      return <Route {...rest} />;
    }
  }

  return <Redirect to='/' />;
};

export default PrivateRoute;
