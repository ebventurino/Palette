import React, { Component } from 'react';
import axios from 'axios'
import SingleFavorite from './SingleFavorite'
import ApiManager from '../APIManager'

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
  
    
     
//render main header. rendering the state
    render() {
      console.log(this.state.favorites)
      return (
    
          <div className="main-content">
          <h1>Favorites</h1>
            <SingleFavorite data={this.state.favorites} />
            
            
            
  
          </div>
          
      //   </div>
  
       );
  
    }
  
  }