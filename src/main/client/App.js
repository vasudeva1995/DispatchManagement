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
  updateCredentials(key,value){
     if(key==='email')
     this.setState({email:value});
     else
     this.setState({password:value})
  }
  render() {
    return (
      <div>
          <div>
            <h1> email </h1>
            <input onClick={(val)=>this.updateCredentials('email',val)}></input>;
          </div>
          <div>
              <h1> pwd </h1>
              <input onClick={(val)=>this.updateCredentials('password',val)}></input>;
          </div>
      </div>
    );
  }
}

export default App;