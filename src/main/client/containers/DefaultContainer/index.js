import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import AppLayOut from './appLayOut';

import './style.scss';

// This class contains fixed components to render including the switch routing which is dynamic and is managed by routes


class DefaultContainer extends PureComponent {
  render() {
    return (
      <Route path="/" component={AppLayOut} />
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, {

})(DefaultContainer);
