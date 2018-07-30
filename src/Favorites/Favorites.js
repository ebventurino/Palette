import React, { Component } from 'react';
import ApiManager from '../APIManager'
import axios from 'axios'
import logo from '../PaletteLogo.jpg'
import SingleFavorite from './SingleFavorite'

export default class Favorites extends Component {
    
    
  constructor() {
      super();
      this.state = {
        favorites: [],
  
  
      };
    }
  // calling favorites which are in JSON, then update state
    componentDidMount() {
      axios.get('http://localhost:5002/favorites')
        .then (response => {
          console.log(response,"RESPONSE")
          this.setState({
            favorites: response.data
          });
        })
        .catch(error => {
          console.log("error", error)
        });
    }
  
//render main header pass props into state
    render() {
      console.log(this.state.favorites)
      return (
        <div>
          <div className="main-header">
            <div className="inner">
              <img src={logo} className="App-logo" alt="logo" />
  
            </div>
          </div>
          <div className="main-content">
            <SingleFavorite data={this.state.favorites} />
  
          </div>
        </div>
  
      );
  
    }
  
  }