import APIManager from './APIManager'
import React, { Component } from "react"
import logo from './PaletteLogo.jpg';

export default class Login extends Component {
    state = {
        email: " ",
        password: " "
    }

        handleRegister = (e) => {
            e.preventDefault()
            const newUser = {
                email: this.state.email,
                password: this.state.password,
            }
            APIManager.registerUser(newUser)
                .then((response) => {
                    const email = response.email
                    APIManager.getUserByEmail(email)
                        .then((taco) => {
                            // console.log(taco[0].id)
                            localStorage.setItem(
                                "credentials",
                                JSON.stringify({
                                    userName: this.state.userName,
                                    email: this.state.email,
                                    password: this.state.password,
                                    currentUserId: taco[0].id
    
                                })
    
                            )
                        })
                })
    
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

        APIManager.getUserByEmail(this.state.email)
        .then ((taco) => {
            console.log(taco, "TACO")
           localStorage.setItem(
                "credentials",
                JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                    userName: this.state.userName,
                    id: taco[0].id
                    
                })
            )
        })
    }
            
  
            
        //render the form
    render() {
        return (
            <React.Fragment>
            <div className="App">

            <header className="App-header">
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
               <button type="submit">
                    Sign in
                </button>
            </form>


            <div className="App">
            <header className="App-header">
            </header>
          </div>
            
            <form onSubmit={this.handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register</h1>
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
               <button type="submit"onClick={() => window.location.reload()}>
                    Register
                </button>
            </form>
            </React.Fragment>

            
        )
    }
}