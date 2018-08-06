import React, { Component } from 'react';
import logo from './PaletteLogo.jpg'


export default class header extends Component {
    render() {
        return (
    // <h1 className= "section-title">Friend List</h1>
   
      <div className="header">
        <img src={logo} className="App-logo" alt="logo" />
        
        
        
      </div>
        )
    }
}