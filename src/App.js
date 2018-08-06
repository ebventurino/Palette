import React, { Component } from 'react';
import ApplicationViews from './ApplicationViews'
import NavBar from './nav/NavBar'
import header from './header'
// import NavBar from './nav/NavBar'


class App extends Component {
  onSubmit = (fields) => {
    console.log('App comp got: ', fields);
  }
  render() {
    return (
      
      <React.Fragment>
        <header />
        
        <NavBar />
        <ApplicationViews />
        
      </React.Fragment>

    );

  }

}


export default App;
