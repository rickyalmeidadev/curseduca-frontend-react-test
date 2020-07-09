import React from 'react';
import { Route, Redirect, useLocation, RouteProps } from 'react-router-dom';

const isAuthenticated = () => true;

interface Props extends RouteProps {
  component: React.FC;
}

const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const location = useLocation();

  if (!isAuthenticated()) {
    return <Redirect to={{ pathname: '/login', state: { from: location } }} />;
  }

  return <Route {...rest} component={Component} />;
};

export default PrivateRoute;
