
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { positions, Provider as AlertProvider, transitions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import DefaultContainer from './containers/DefaultContainer';
import configureStore from './store';

const options = {
  timeout: 5000,
  position: positions.TOP_CENTER,
  transition: transitions.FADE,
  className: "alert_div"
};

ReactDOM.render(
  <Provider store={configureStore()}>
    <AlertProvider template={AlertTemplate} {...options}>
      <Router>
        <DefaultContainer />
      </Router>
    </AlertProvider>
  </Provider>,
  document.getElementById('root'),
);
