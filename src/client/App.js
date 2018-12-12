import React, { Component } from 'react';
import './app.css';
import Login from './components/Login';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
      player: {}
    };
  }

  handleB = () => {
    console.log('clicked')

    this.oauthLogin();

    this.setState({
      toggle: !this.state.toggle
    })
  }

  oauthLogin = () => {
    console.log('oauthLogin has been invoked');
    fetch('http://localhost:8080/auth/github')
      .then(r => r.json())
      .then(jsonData => {
        this.setState({
          player: jsonData
        })
      })
      .then(() => console.log(this.state.user))
      .catch(err => console.warn(err));
  };

  render() {
    return (
      <div>
       <Login 
        handleB = {this.handleB} 
        toggle = {this.state.toggle} 
        /> 
      </div>
    );
  }
}
