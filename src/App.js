import React, { Component } from 'react';
import ApplicationViews from './ApplicationViews'
import NavBar from './nav/NavBar'
import Favorites from './Favorites/Favorites'
import Comments from './Favorites/Comments'
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
        <Favorites />
        <Comments />
      </React.Fragment>

    );

  }

}


export default App;
