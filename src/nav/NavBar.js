import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"


export default class NavBar extends Component {
    render() {
        return (
            <nav>
                <Link to="/">Welcome</Link>
                <Link to="/Inspiration">Inspiration</Link>
                <Link to="/Refs">References</Link>
            </nav>
        )
    }
}

