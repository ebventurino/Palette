import { Route } from 'react-router-dom'
import React, { Component } from "react"
import Inspiration from './Inspiration/Inspiration'
import Refs from './Refs/Refs'
import Welcome from './Welcome'


export default class ApplicationViews extends Component {
    isAuthenticated = () => localStorage.getItem("credentials") !== null
    
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={Welcome} />
                <Route path="/Refs" component={Refs} />
                <Route path="/Inspiration" component={Inspiration} />
            </React.Fragment>
        )
    }
}

