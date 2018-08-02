import React from 'react';
import Favorite from './Favorite'
import APIManager from '../APIManager'
import Comments from './Comments'
//setting props
const CommentList = props => {

    const results = props.data;
    console.log(props.data,"props.data")


    let allComments = results.map(comments =>
        <Comments key={comments.id}
            message={comments.message}
            favoriteId={comments.favoriteId} />


    ); console.log(allComments, "get all comments")
    return (
        <React-fragment>


            < div className="comment-list">
                {allComments}
            </div>

        </React-fragment>


    );
}

export default CommentList;
