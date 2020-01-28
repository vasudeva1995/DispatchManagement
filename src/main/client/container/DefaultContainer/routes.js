import React from 'react';
import {Switch,Route} from 'react-router-dom';

import App from '../../App'
import MyComponent from '../Header';

export const RoutesToRender = () =>
  <Switch>
     <Route path="/" exact><MyComponent/></Route>
     <Route path="/App"><App/></Route>
  </Switch>
