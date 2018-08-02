import React, { Component } from 'react';
import CommentList from './CommentList'
import ApiManager from '../APIManager'




export default class Comments extends Component {
    state = {
        comments: [],
        commentsToEdit: {},
    }

    componentDidMount() {
        ApiManager.getAllComments()
            .then(comments => this.setState({ comments: comments }))
    }

    addComment = (e) => {
        e.preventDefault();
        const newObject = {
            id: this.state.id,
            message: this.state.message,
            UserId: this.props.UserId
        }
        ApiManager.addComment(newObject)
            .then(Response => {
                ApiManager.getAllComments()
            })
            .then(comments => {
                this.setState({ comments: comments })
            })

    }

    getAllComments = (e) => {
        e.preventDefault();
        console.log(this.state.getAllComments)
        ApiManager.getAllComments()
            .then(comments => this.setState({ comments: comments }))
    }
    commentFormInput = (e) => {
        // e.preventDefault();
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

    messagesFormInput = (event) => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    render() {
        return (

            <div className="comments">
                <form onSubmit={this.addComment.bind(this)}>
                    <label>
                        Notes:
                        <input onChange={this.commentFormInput} type="text" name="Comment" id="message"
                            placeholder="Notes"
                            required="" autoFocus="" />
                    </label>
                    <button type="submit" value="Submit" className="submit" onClick={this.commentFormInput}>Add Comment</button>
                </form>


            </div>
        )
    }
}
