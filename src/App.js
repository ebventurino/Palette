import React, { Component } from 'react';
import logo from './PaletteLogo.jpg';
import Form from './Login'
import ApplicationViews from './ApplicationViews'
import NavBar from './nav/NavBar'
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


        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Form onSubmit={fields => this.onSubmit(fields)} />
        </div>
      </React.Fragment>

    );

  }

}


export default App;
