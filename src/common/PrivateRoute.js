import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authHelper from '../helpers/authHelper';

const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props;

  return <Route {...rest} render={(props) => authHelper.isAuthenticated ? (
    <Component {...props} />
  ) : (
    <Redirect to={{
      pathname: '/login',
      state: { from: props.location }
    }} />
  )} />
}

export default PrivateRoute;
