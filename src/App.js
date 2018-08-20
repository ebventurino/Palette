import React, { Component } from 'react';
import ApplicationViews from './ApplicationViews'
import NavBar from './nav/NavBar'
import Header from './header'
import Logout from './logout'
// import NavBar from './nav/NavBar'


class App extends Component {
  onSubmit = (fields) => {
    console.log('App comp got: ', fields);
  }
  render() {
    return (
      
      <React.Fragment>
        <Header />
        <Logout />
        <NavBar />
        <ApplicationViews />
        
      </React.Fragment>

    );

  }

}


export default App;
