import React, { Component } from 'react';
import '../App.css';
import axios from 'axios'
import PhotoList from './PhotoList';
import logo from '../PaletteLogo.jpg'

export default class Photos extends Component {
  
  constructor() {
    super();
    this.state = {
      photos: []
    };
  } 
 
  componentDidMount() {
    axios.get('https://api.unsplash.com/photos/?client_id=34b1a6b2a6c2a9b3f6af5e39a76c9943bdbbaf10bd455336f70e98ca31250475&per_page=30')
      .then (response => {
        this.setState({
          photos: response.data
        });
      })
      .catch(error => {
        console.log("error", error)
      });
  }



  render() { 
    console.log(this.state.photos)
    return (
      <div>
        <div className="main-header">
          <div className="inner">
          <img src={logo} className="App-logo" alt="logo" />
    
          </div>   
        </div>    
        <div className="main-content">
          <PhotoList data={this.state.photos}/>
        </div>
      </div>
    );
  }
}
