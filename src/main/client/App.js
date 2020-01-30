import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { simpleAction } from './container/Header/appAction';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.updateCredentials = this.updateCredentials.bind(this);
  }

  updateCredentials(key, event) {
    const { firstAction } = this.props;
    if (key === 'email') {
      this.setState({ email: event.currentTarget.value });
    } else {
      this.setState({ password: event.currentTarget.value });
    }
    firstAction(event.currentTarget.value);
  }

  render() {
    const { data } = this.props;
    const { email, password } = this.state;
    console.log(email, password);
    return (
      <div>
        <div>
          <h1> email </h1>
          <input onChange={(val) => this.updateCredentials('email', val)} />
        </div>
        <div>
          <h1> pwd </h1>
          <input onChange={(val) => this.updateCredentials('password', val)} />

        </div>
        <div>{data}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.appReducer.result,
});

const mapDispatchToProps = {
  firstAction: simpleAction,
};

App.propTypes = {
  data: PropTypes.string.isRequired,
  firstAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
