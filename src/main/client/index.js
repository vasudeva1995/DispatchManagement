
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import DefaultContainer from './containers/DefaultContainer';
import configureStore from './store';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <DefaultContainer />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
