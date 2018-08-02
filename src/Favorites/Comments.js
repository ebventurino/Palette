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
        console.log(this.state.TaskName)
        ApiManager.addComment()
        .then(comments => this.setState({ comments: comments }))

    }

    getAllComments = (e) => {
        e.preventDefault();
        console.log(this.state.getAllComments)
        ApiManager.getAllComments()
            .then(comments => this.setState({ comments: comments }))
    }
    commentFormInput = (e) => {
        e.preventDefault();
        const stateToChange = {}
        stateToChange[e.target.id] = e.target.value
        console.log("stateToChange", stateToChange)
         this.setState(stateToChange)

    }
    completeComment = (passingIn) => {
        console.log(ApiManager.updateOneComment)
        ApiManager.updateOneComment(passingIn)
                    .then(comments => this.setState({ comments: comments }))
            
    }

    
    render() {
        return (

            <div className="comments">
                <form onSubmit={this.addComment}>
                    <label>
                        Notes:
                        <input onChange={this.commentFormInput} type="text" name="Comment" id="TaskName"
                            placeholder="Task Name"
                            required="" autoFocus="" />
                    </label>
                    <button type="submit" value="Submit" className="submit">Add Comment</button>
                </form>
            </div>
        )
    }
}
