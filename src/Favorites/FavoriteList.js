import React, { Component } from 'react';
import ApiManager from '../APIManager'
import axios from 'axios'
import logo from '../PaletteLogo.jpg'
import Favorites from './Favorites'

// import FavoriteList from './FavoriteList'
export default class Favorites extends Component {


    constructor() {
        super();
        this.state = {
            favorites: [],


        };
    }

    componentDidMount() {
        axios.get('http://localhost:5002/favorites')
            .then(response => {
                console.log(response, "RESPONSE")
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
        return (
            <React-fragment>
                <div>
                    <div className="main-header">
                        <div className="inner">
                            <img src={logo} className="App-logo" alt="logo" />

                        </div>
                    </div>

                </div>
                <ul>
                    {this.state.favorites.map(favorites => (
                        <Favorites url={favorites.photoUrl}
                            key={favorites.id}
                            getAllFavorites={ApiManager.getAllFavorites}
                            favorite={favorites} />


                    ))}
                </ul>



                }
    </React-fragment>
        )
    }
}