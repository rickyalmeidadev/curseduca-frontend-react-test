import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect, useLocation, RouteProps } from 'react-router-dom';

import { ApplicationState } from '../store';
import { authPersisted } from '../store/auth/actions';
import { isAuthenticated } from '../services/auth';
import { Loading } from '../components';

interface Props extends RouteProps {
  component: React.FC;
}

const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
  const { loading } = useSelector((state: ApplicationState) => state.auth);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authPersisted());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (!isAuthenticated()) {
    return <Redirect to={{ pathname: '/login', state: { from: location } }} />;
  }

  return <Route {...rest} component={Component} />;
};

export default PrivateRoute;
