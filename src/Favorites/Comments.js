import React, { Component } from 'react';
import CommentList from './CommentList'
import ApiManager from '../APIManager'
import axios from 'axios'




export default class Comments extends Component {
    state = {
        comments: [],
        commentsToEdit: {...this.props.comments},
        viewForm: false,
    
    }
    componentDidMount() {
        axios
            .get('http://localhost:5002/comments')
            .then(({ data }) => {
                console.log(data, "DATA");
                this.setState({ comments: data })


            })

    }

    editMessage = (id) => {
        // console.log("mealId", mealId)
        fetch(`http://localhost:5002/message/${id}`)
            // Once the new array of meals is retrieved, set the state
            .then(a => a.json())
            .then(comments => {
                this.setState({CommentsToEdit: comments, viewForm: true})
            })
    }

    addComment = (e) => {
        e.preventDefault();
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
        e.preventDefault();
        console.log(this.state.getAllComments)
        ApiManager.getAllComments()
            .then(comments => this.setState({ comments: comments }))
    }
    commentFormInput = (e) => {
        // e.preventDefault();
        const stateToChange = {}
        stateToChange[e.target.id] = e.target.value
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
                        <textarea onChange={this.commentFormInput} type="textarea" rows="5" cols="80" name="Comment" id="message"
                            placeholder="Notes"
                            required="" autoFocus=""  />
                    </label>
                    <button type="submit" value="Submit" className="submit" onClick={this.commentFormInput}>Add Comment</button>
                    </form>
                    <a href="#">Edit</a>

                {
                    this.state.comments.map(message =>
                        <CommentList key={message.id} message={message} />
                    )
                    
                }
            </div>
        )
    }
}
