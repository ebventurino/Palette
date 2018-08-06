import React, { Component } from 'react';
import '../App.css';
import axios from 'axios'
import SinglePhoto from './SinglePhoto';
import logo from '../PaletteLogo.jpg'

export default class Photos extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      counter: 1

    };
  }

  // main api
  componentDidMount() {
    axios.get('https://api.unsplash.com/photos/?client_id=34b1a6b2a6c2a9b3f6af5e39a76c9943bdbbaf10bd455336f70e98ca31250475&per_page=9')
      .then(response => {
        this.setState({
          photos: response.data
        });
      })
      .catch(error => {
        console.log("error", error)
      });
  }

  // More Photos API
  getMorePhotos = () => {
    console.log(this.state.counter)
    this.setState({ counter: this.state.counter + 1 })
    
    fetch(`https://api.unsplash.com/photos/?client_id=34b1a6b2a6c2a9b3f6af5e39a76c9943bdbbaf10bd455336f70e98ca31250475&per_page=9&page=${this.state.counter}`)
      .then(e => e.json())
      .then(photos => this.setState({ photos: photos }))
      
  }

  // header and posting via state
  render() {
    console.log(this.state.photos)
    return (
      <div>
        <div className="main-header">
          <button onClick={this.getMorePhotos}>More Images</button>
          <div className="inner">
          <img src={logo} className="App-logo" alt="logo" />


          </div>
        </div>
        <div className="main-content">
          <SinglePhoto data={this.state.photos} />

        </div>
      </div>

    );

  }

}