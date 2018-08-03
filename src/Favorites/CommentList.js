import React from 'react';
import Favorite from './Favorite'
import APIManager from '../APIManager'
import Comments from './Comments'
//setting props
const CommentList = props => {

    const results = props;
    console.log(results,"props")


    // let allComments = results.message.map(comments =>
    //     <Comments key={comments.id}
    //         message={comments.message}
    //         favoriteId={comments.favoriteId} 
    //         UserId = {JSON.parse(localStorage.getItem('credentials')).id}/>
        

    // ); 
    return (
        <React-fragment>


            < div className="comment-list">
                {results.message.message}
            </div>

        </React-fragment>


    );
}

export default CommentList;
