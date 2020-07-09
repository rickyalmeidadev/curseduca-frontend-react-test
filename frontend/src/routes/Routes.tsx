import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Login, Home } from '../pages';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </Router>
);

export default Routes;
