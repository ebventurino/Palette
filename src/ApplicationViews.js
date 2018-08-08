import { Route } from "react-router-dom";
import React, { Component } from "react";
import Login from "./Login"
import Photos from "./Photos/Photos"
import App from "./App"
import FavoritesState from "./Favorites/FavoritesState"
import Comments from "./Comments/Comments"


export default class ApplicationViews extends Component {
    isAuthenticated = () => localStorage.getItem("credentials") !== null

    render() {
        return (

            <React.Fragment>
                <Route exact path="/" render={props => {
                    if (this.isAuthenticated()) {
                        return <Photos />
                        
                    } else {
                        return <Login{...props}/>
                    }
                }} />
                <Route exact path="/Photos" component={Photos} />
                <Route exact path="/FavoritesState" component={FavoritesState} />
                <Route exact path="/Comments" component={Comments}/>
            
            </React.Fragment>
        )
    }
}