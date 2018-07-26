import { Route } from "react-router-dom";
import React, { Component } from "react";
import Login from "./Login"
import App from "./App"
import Photos from "./Photos"


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
            </React.Fragment>
        )
    }
}