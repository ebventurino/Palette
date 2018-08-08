import React, { Component } from 'react';
import axios from 'axios'
import AllFavoriteProps from './AllFavoriteProps'
import ApiManager from '../APIManager'
import Favorite from './Favorite'

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
  
    deletePhoto = (photoId) => {
      console.log("In the first .then")
      ApiManager.deletePhoto(photoId)
          .then(() => {
              return ApiManager.getAllFavorites()
              
          }) 
          .then(favorites => {
              console.log(favorites, 'favorites')
              console.log("In the second .then")
              this.setState({
                  favorites: favorites
              });
          });

      
    }  
     
//render main header. rendering the state
    render() {
      console.log(this.state.favorites)
      return (
    
          <div className="main-content">
          <h1>Favorites</h1>
            <AllFavoriteProps data={this.state.favorites}
             deleteFavorites= {this.deletePhoto}
             />
            
            
            
  
          </div>
      
  
       );
  
    }
  
  }