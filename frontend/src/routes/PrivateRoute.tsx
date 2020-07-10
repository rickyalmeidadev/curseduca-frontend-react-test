import React from 'react';
import { Route, Redirect, useLocation, RouteProps } from 'react-router-dom';

import { isAuthenticated } from '../services/auth';
import { useDispatch } from 'react-redux';
import { authPersisted } from '../store/auth/actions';

interface Props extends RouteProps {
  component: React.FC;
}

const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  if (!isAuthenticated()) {
    return <Redirect to={{ pathname: '/login', state: { from: location } }} />;
  }

  dispatch(authPersisted());

  return <Route {...rest} component={Component} />;
};

export default PrivateRoute;
