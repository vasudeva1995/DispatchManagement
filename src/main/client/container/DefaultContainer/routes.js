import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from '../../App';
import MyComponent from '../Header';

const RoutesToRender = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={App}
    />
    <Route
      exact
      path="/App"
      component={MyComponent}
    />
  </Switch>
);

export default RoutesToRender;
