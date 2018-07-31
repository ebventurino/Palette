import React from 'react';



export default class Comments extends Component {
    state = {
        comments: [],
    }

    componentDidMount() {
        ApiManager.getAllComments()
            .then(comments => this.setState({ comments: comments }))
    }

    addComment(event) {
        event.preventDefault()
        const newObject = { name: this.state.comments, }
        fetch("http://localhost:5002/comments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newObject)
        })
            .then(() => {
                Database.getAllComments()
                    .then(comments => this.setState({ comments: comments }))


            })
    }

    render() {
        return (
            <div className="comments">
                <form onSubmit={this.addComment.bind(this)}>
                    <label>
                        Comment:
<input type="text" name="Comment" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
}    