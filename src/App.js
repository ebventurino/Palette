import React, { Component } from 'react';
import logo from './PaletteLogo.jpg';
import './App.css';
import Form from './LoginForm'

class App extends Component {
  onSubmit = (fields) => {
    console.log('App comp got: ', fields);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Form onSubmit={fields => this.onSubmit(fields)}/>
        </div>
      

    );
    
  }
}


export default App;
