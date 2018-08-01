import React, { Component } from 'react';
import ApiManager from '../APIManager'




export default class Comments extends Component {
    state = {
        comments: [],
    }

    componentDidMount() {
        ApiManager.getAllComments()
            .then(comments => this.setState({ comments: comments }))
    }


addComment = (e) => {
    e.preventDefault();
    console.log(this.state.comments)
    ApiManager.addComment
}   
    render() {
        return (
            
            <div className="comments">
                <form onSubmit={this.addComment}>
                    <label>
                        Notes:
<input type="text" name="Comment" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
