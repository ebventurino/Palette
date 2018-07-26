import React, { Component } from 'react';
import '../App.css';
import axios from 'axios'
import GifList from './GifList';
import logo from '../PaletteLogo.jpg'

export default class Photos extends Component {
  
  constructor() {
    super();
    this.state = {
      gifs: []
    };
  } 
 
  componentDidMount() {
    axios.get('https://api.unsplash.com/photos/?client_id=34b1a6b2a6c2a9b3f6af5e39a76c9943bdbbaf10bd455336f70e98ca31250475&per_page=30')
      .then (response => {
        this.setState({
          gifs: response.data
        });
      })
      .catch(error => {
        console.log("error", error)
      });
  }



  render() { 
    console.log(this.state.gifs)
    return (
      <div>
        <div className="main-header">
          <div className="inner">
          <img src={logo} className="App-logo" alt="logo" />
    
          </div>   
        </div>    
        <div className="main-content">
          <GifList data={this.state.gifs}/>
        </div>
      </div>
    );
  }
}
