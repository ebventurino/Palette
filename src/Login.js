import APIManager from "./APIManager"
import React, { Component } from "react"
import logo from './PaletteLogo.jpg';

export default class Login extends Component {
    state = {
        email: " ",
        password: " "
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // Simplistic handler for login submit
    handleLogin = (e) => {
        e.preventDefault()

        /*
            For now, just store the email and password that
            the customer enters into local storage.
        */
    
           localStorage.setItem(
                "credentials",
                JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                    userName: this.state.userName,
                    
                }
            )
        )
    }
            
        //render the form
    render() {
        return (
            <React.Fragment>
            <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
          </div>
            
            <form onSubmit={this.handleLogin}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail">
                    Email address
                </label>
                <input onChange={this.handleFieldChange} type="email"
                    id="email"
                    placeholder="Email address"
                    required="" autoFocus="" />
                <label htmlFor="inputPassword">
                    Password
                </label>
                <input onChange={this.handleFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required="" />
               <button type="submit"onClick={() => window.location.reload()
                }>
                    Sign in
                </button>
            </form>
            </React.Fragment>

            
        )
    }
}