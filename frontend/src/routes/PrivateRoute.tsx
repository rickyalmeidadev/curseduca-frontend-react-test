import React, { useEffect } from 'react';
import { Route, Redirect, useLocation, RouteProps } from 'react-router-dom';

import { isAuthenticated } from '../services/auth';
import { useDispatch, useSelector } from 'react-redux';
import { authPersisted } from '../store/auth/actions';
import { ApplicationState } from '../store';

interface Props extends RouteProps {
  component: React.FC;
}

const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const {loading} = useSelector((state: ApplicationState) => state.auth)
  const location = useLocation();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(authPersisted());
  }, [dispatch])

  if (loading) {
    return <span>loading...</span>
  }
  
  if (!isAuthenticated()) {
    return <Redirect to={{ pathname: '/login', state: { from: location } }} />;
  }

  return <Route {...rest} component={Component} />;
};

export default PrivateRoute;
