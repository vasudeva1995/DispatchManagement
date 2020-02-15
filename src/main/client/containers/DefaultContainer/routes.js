import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../HomeContainer';
import Setting from '../SettingContainer';
import Cloth from '../ClothContainer';
import LotsContainer from '../Lots/index';


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
      path="/Lots"
      component={LotsContainer}
    />
    <Route
      exact
      path="/cloth-setting"
      component={Cloth}
    />
  </Switch>
);

export default RoutesToRender;
