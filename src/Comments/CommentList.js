import React from 'react';
import Moment from 'react-moment';
import Comments from './Comments'

//setting props
export default props => {
   
 
    console.log(props.message,"message.id")
    console.log(props.editComment, "props")

    return (
    
   
   
        <React-fragment>


            < div className="comment-list">
            
            <h1>___</h1>
            <h6><Moment format="YYYY/MM/DD">
                2018-08-05T12:59-0500
            </Moment></h6>
                {props.message.message}
                
                <button onClick={() => props.editComment(props.message.id)}>Edit</button>
                
                <button onClick={() => props.deleteComment(props.message.id)}>Delete</button>
                
            </div>

        </React-fragment>


    );
}
