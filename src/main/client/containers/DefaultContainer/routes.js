import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../HomeContainer';
import Setting from '../SettingContainer';
import Cloth from '../ClothContainer';


const RoutesToRender = () => (
  <Switch>
    <Route
      exact
      path="/home"
      component={Home}
    />
    <Route
      exact
      path="/setting"
      component={Setting}
    />
    <Route
      exact
      path="/cloth-setting"
      component={Cloth}
    />
  </Switch>
);

export default RoutesToRender;
