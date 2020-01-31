import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import RoutesToRender from './routes';
// This class contains fixed components to render including the switch routing which is dynamic and is managed by routes


class DefaultContainer extends PureComponent {
  render() {
    return <RoutesToRender />;
  }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, {

})(DefaultContainer);
