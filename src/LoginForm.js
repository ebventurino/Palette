import React from 'react';

export default class Form extends React.Component {
    state = {
        email: '',
        password:''
    };

    change = e =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    };
//on click, will clear form
onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
        email: '',
        password:''
    });
}


render () {
    return (
        <form>
            <input 
                name='email'
                placeholder='email' 
                value={this.state.firstName}
                onChange={e => this.setState({firstName: e.target.value})}
                onChange={e => this.change(e)}/>
            <input 
            name='password'
            type='password'
            placeholder='Password' 
            value={this.state.firstName} 
            onChange={e => this.setState({email: e.target.value})}
            onChange={e =>this.change(e)}/>

            <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
    )
}
}