import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LotsContainer from '../Lots/index';
import App from '../AppContainer/App';
import Home from '../HomeContainer';
import Header from '../HeaderContainer';
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
      path="/form"
      component={App}
    />
    <Route
      exact
      path="/Lots"
      component={LotsContainer}
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
    <Route
      exact
      path="/setting/cloth"
      component={Cloth}
    />
  </Switch>
);

export default RoutesToRender;
