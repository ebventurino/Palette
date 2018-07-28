import React, { Component } from 'react';
import ApiManager from '../APIManager'
import axios from 'axios'
import logo from '../PaletteLogo.jpg'
import SingleFavorite from './SingleFavorite'
// import FavoriteList from './FavoriteList'
export default class Favorites extends Component {
    
    
    constructor() {
        super();
        this.state = {
          favorites: [],
    
    
        };
      }
    
      componentDidMount() {
        axios.get('http://localhost:5002/favorites?photoUrl')
          .then (response => {
            this.setState({
              favorites: response.data
            });
          })
          .catch(error => {
            console.log("error", error)
          });
      }
    

    render() {
        console.log(this.state.favorites)
        return(
       
       
            <div>
                <h1> Hello </h1>
                <SingleFavorite data={this.state.favorites}/>
          </div>
    
        )
      }
    
    }