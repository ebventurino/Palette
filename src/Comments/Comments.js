import React, { Component } from 'react';
import CommentList from './CommentList'
import ApiManager from '../APIManager'
import axios from 'axios'




export default class Comments extends Component {
    state = {
        comments: [],
        commentsToEdit: { ...this.props.comments },
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
                            editComment={this.state.commentsToEdit} />

                    )

                }
                <form onSubmit={this.handleUpdate}>
                    <h1 className="h3 mb-3 font-weight-normal">Edit Comment</h1>

                    <label htmlFor="inputText">Edit Comment</label>
                    <textarea
                        // value={this.state.comments}
                        // onChange={this.handleFieldChange}
                        type="textarea"
                        rows="5"
                        cols="80"
                        id="editComments"
                        required=""
                    />
                    <button type="submit">Update</button>
                </form>
            </div>
        )
    }
}
