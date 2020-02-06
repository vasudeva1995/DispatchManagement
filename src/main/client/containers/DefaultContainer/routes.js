import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from '../AppContainer/App';
import Home from '../HomeContainer';
import Header from '../HeaderContainer';
import Setting from '../SettingContainer';


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
    <Route
      exact
      path="/setting"
      component={Setting}
    />
  </Switch>
);

export default RoutesToRender;
