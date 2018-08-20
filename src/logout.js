import React, { Component } from 'react';
import { Route, Redirect } from 'react-router'

export default class Logout extends Component {
    state = {
        redirect: false
    }

    logout = () => {
        localStorage.removeItem('credentials');
        console.log("I am working-logout")
        this.setState({
            redirect: true
            
        })

    }

    render() {
       
        let button;

         if (this.state.redirect === true)  {
             button = <Redirect to = "/Login" />
         }

         <Redirect to="/Login" />
        return (

            <React.Fragment>
                <div className="logout">
                    <button onClick={this.logout}>Logout</button>
                    {button}
                    
                     
                
            


                </div>
            </React.Fragment>

        );
    };

};
