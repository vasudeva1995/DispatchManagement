import React, { Component } from "react";

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
          <div>{this.state.email + this.state.password}</div>
      </div>
    );
  }
}

export default App;