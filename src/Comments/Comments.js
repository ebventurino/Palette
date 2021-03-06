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

    gettingId = JSON.parse(localStorage.getItem('credentials')).userId
    // main API
    componentDidMount() {
        axios
            .get(`http://localhost:5002/comments?userId=${this.gettingId}`)
            .then(({ data }) => {
                console.log(data, "DATA");
                this.setState({ comments: data })


            })


    }

    addComment = (e) => {
        const newObject = {
            message: this.state.newComment.message,
            userId: JSON.parse(localStorage.getItem('credentials')).userId
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
        this.setState({newComment:stateToChange})

        ApiManager.getAllComments(JSON.parse(localStorage.getItem('credentials')).userId)
            .then(Comments => {
                this.setState({
                    comments: Comments
                })
            })

    }
    deleteComment = (commentId) => {
        ApiManager.deleteComment(commentId)
            .then(() => {
                return ApiManager.getAllComments(JSON.parse(localStorage.getItem('credentials')).userId)
            })
            .then(Comments => {
                console.log(Comments, 'comments')
                this.setState({
                    comments: Comments
                });
            });

    }
    handleEdit = (event) => {
        const commentToPut = this.state.commentsToEdit
        event.preventDefault()
        console.log(this.state.commentsToEdit, "comments")
        ApiManager.updateComment(commentToPut,JSON.parse(localStorage.getItem('credentials')).userId)
            .then(commentList => {
                console.log(commentList, "commentList")
                this.setState({
                    comments: commentList
                })
            })
    }

    handleFieldChange = (event) => {
        const stateToChange = this.state.commentsToEdit
        stateToChange[event.target.id] = event.target.value
        this.setState({ commentsToEdit: stateToChange })
        console.log("I am working")
        console.log(this.state.commentsToEdit.message)
    }


    editComment = (taskId) => {
        ApiManager.updateComment(taskId)
            .then(() => {
                return ApiManager.getAllComments()
            })
            .then(Comments => {
                console.log(Comments, "comments")
                this.setState({
                    commentsToEdit: Comments

                })
            })
    }


   
    inputComment = (userId) => {
        ApiManager.inputComment(userId)
            .then(Comments => {
                console.log(userId, "ID") 
                this.setState({
                    commentsToEdit: Comments

                })
            })
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
                    <button type="submit" value="Submit" className="submit">Add Comment</button>

                </form>

                {

                    this.state.comments.map(message =>
                        <CommentList
                            key={message.id}
                            message={message}
                            deleteComment={this.deleteComment}
                            inputComment={this.inputComment} />

                    )

                }

                <form onSubmit={this.handleEdit}>
                    <h1 className="h3 mb-3 font-weight-normal">Edit Comment</h1>
                    <textarea
                    
                        onChange={this.handleFieldChange}
                        type="textarea"
                        rows="5"
                        cols="80"
                        id="message"
                        required=""
                        value={this.state.commentsToEdit.message}
                    />
                    <button type="submit">Update</button>
                </form>
            </div>
        )
    }
}
