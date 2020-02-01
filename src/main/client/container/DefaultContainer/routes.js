import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from '../../App';
import Header from '../Header';

const RoutesToRender = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={Header}
    />
    <Route
      exact
      path="/App"
      component={App}
    />
  </Switch>
);

export default RoutesToRender;
