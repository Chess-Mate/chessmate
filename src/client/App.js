import React, { Component } from 'react';
import './app.css';
import Login from './components/Login';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
    };
    this.handleB = this.handleB.bind(this); 
  }

  handleB(){
    console.log('clicked')
    this.setState({
      toggle: !this.state.toggle
    })
  }

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
