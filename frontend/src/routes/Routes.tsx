import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import { Login, Home, AddPost } from '../pages';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/add" component={AddPost} />
    </Switch>
  </Router>
);

export default Routes;
