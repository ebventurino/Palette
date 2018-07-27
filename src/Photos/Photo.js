import React from 'react';

const Photo = props => (
  <li className="gif-wrap">
    <img src={props.url}alt=""/>
    <label>
    Favorite:
<input onClick={() => props.completeTask(props.task.id)}
          name="favorite"
          type="checkbox"
          // checked={props.task.completeTask}
          />
   </label>
    </li>

);

export default Photo;