import React from 'react';
import Moment from 'react-moment';

//setting props
export default props => {
    console.log(props.message.id, )
 
    

    return (
    
   
   
        <React-fragment>


            < div className="comment-list">
            
            <h1>___</h1>
            <h6><Moment format="YYYY/MM/DD">
                2018-08-05T12:59-0500
            </Moment></h6>
                {props.message.message}
                <button>Edit</button>
                <button onClick={() => props.deleteComment(props.message.id)}>Delete</button>
                
            </div>

        </React-fragment>


    );
}
