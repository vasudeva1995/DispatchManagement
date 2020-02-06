import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from '../AppContainer/App';
import Home from '../HomeContainer';
import Header from '../HeaderContainer';


const RoutesToRender = () => (
  <Switch>
    <Route
      exact
      path="/home"
      component={Home}
    />
    <Route
      exact
      path="/form"
      component={App}
    />
    <Route
      exact
      path="/header"
      component={Header}
    />
  </Switch>
);

export default RoutesToRender;
