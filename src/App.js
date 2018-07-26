import React, { Component } from 'react';

import Login from './Login'
import ApplicationViews from './ApplicationViews'
import NavBar from './nav/NavBar'
import Welcome from './Welcome'
// import NavBar from './nav/NavBar'


class App extends Component {
  onSubmit = (fields) => {
    console.log('App comp got: ', fields);
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ApplicationViews />
      </React.Fragment>

    );

  }

}


export default App;
