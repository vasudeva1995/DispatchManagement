import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from '../../App';
import Home from '../Home';

const RoutesToRender = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={Home}
    />
    <Route
      exact
      path="/App"
      component={App}
    />
  </Switch>
);

export default RoutesToRender;
