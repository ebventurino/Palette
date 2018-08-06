import React, { Component } from 'react';
import CommentList from './CommentList'
import ApiManager from '../APIManager'
import axios from 'axios'




export default class Comments extends Component {
    state = {
        comments: [],
        commentsToEdit: {},
        viewForm: false,
      

    }
    // main API
    componentDidMount() {
        axios
            .get('http://localhost:5002/comments')
            .then(({ data }) => {
                console.log(data, "DATA");
                this.setState({ comments: data })


            })

    
    }

    addComment = (e) => {
        const newObject = {
            id: this.state.id,
            message: this.state.message,
            UserId: JSON.parse(localStorage.getItem('credentials')).id
        }
        ApiManager.addComment(newObject)
            .then(Response => {
                ApiManager.getAllComments()
            })



    }

    getAllComments = (e) => {
        console.log(this.state.getAllComments)
        ApiManager.getAllComments()
            .then(comments => this.setState({ comments: comments }))
    }
    // 
    commentFormInput = (e) => {
        // e.preventDefault();
        const stateToChange = {}
        stateToChange[e.target.id] = e.target.value
        this.setState(stateToChange)

        ApiManager.getAllComments()
            .then(Comments => {
                this.setState({ 
                    comments: Comments
                 })
                })
            
    }
    deleteComment = (commentId) => {
        ApiManager.deleteComment(commentId)
            .then(() => {
                return ApiManager.getAllComments()
            })
            .then(Comments => {
                console.log(Comments, 'comments')
                this.setState({
                    comments: Comments
                });
            });

    }
    handleEdit = (event) => {
        const eventList = this.state.commentsToEdit
        event.preventDefault()
        console.log(this.state.commentsToEdit,"comments")
        ApiManager.handleEdit(eventList)
            .then(CommentList => {
                this.setState({
                    tasks: CommentList
                })
            })
    }
//passing in comment ID
    editComment = (commentId) => {
        console.log("commentId","CommentID")
        fetch(`http://localhost:5002/comments/${commentId}`)
            // Once the new array of comments is received, set the state
            .then(a => a.json())
            .then(comments => {
                this.setState({commentsToEdit: comments, viewForm: true})
            })
    }

    handleFieldChange = (event) => {
        const stateToChange = this.state.commentToEdit
        stateToChange[event.target.id] = event.target.value
        this.setState({ commentToEdit: stateToChange })
    }

    render() {

        return (

            <div className="comments">

                <form onSubmit={this.addComment.bind(this)}>
                    <label>
                        <textarea onChange={this.commentFormInput} type="textarea" rows="5" cols="80" name="Comment" id="message"
                            placeholder="Notes"
                            required="" autoFocus="" />
                    </label>
                    <button type="submit" value="Submit" className="submit" onClick={this.commentFormInput}>Add Comment</button>

                </form>


                {

                    this.state.comments.map(message =>
                        <CommentList
                            key={message.id}
                            message={message}
                            deleteComment={this.deleteComment}
                            editComment={this.state.commentToEdit} />

                    )

                }
            </div>
        )
    }
}
