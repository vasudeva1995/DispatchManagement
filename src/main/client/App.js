import React, { Component } from "react";
import { connect } from "react-redux";

import { simpleAction } from "./container/Header/appAction";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    }
    this.updateCredentials=this.updateCredentials.bind(this);
  }

  updateCredentials(key, event){
     if(key==='email')
      this.setState({email: event.currentTarget.value});
     else
      this.setState({password: event.currentTarget.value})
    this.props.simpleAction(event.currentTarget.value);
  }
  render() {
    return (
      <div>
          <div>
            <h1> email </h1>
            <input onChange={(val)=>this.updateCredentials('email',val)}></input>;
          </div>
          <div>
              <h1> pwd </h1>
              <input onChange={(val)=>this.updateCredentials('password',val)}></input>;
          </div>
          <div>{this.props.data}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.appReducer.result
})

const mapDispatchToProps = {
  simpleAction
};

export default connect(mapStateToProps, mapDispatchToProps)(App);