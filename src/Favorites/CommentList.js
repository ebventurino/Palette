import React from 'react';
import Favorite from './Favorite'
import APIManager from '../APIManager'
import Comments from './Comments'
//setting props
export default props => {
    return (
    
   
   
        <React-fragment>


            < div className="comment-list">
                {props.message.message}
                <button>Edit</button>
                <button  onClick={() => Comments.deleteComment(APIManager.message.id)}>Delete</button>
            </div>

        </React-fragment>


    );
}
