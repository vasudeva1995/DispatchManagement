import React from 'react';
import { connect } from 'react-redux';

class MyComponent extends React.Component {
  render() {
    return <div>Hello Thre</div>;
  }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, {

})(MyComponent);
