import React from 'react';


const Photo = props => {
  console.log(props)
 const gettingPhotos = {
   photoId: props.photo.id,
   photoUrl: props.url
 }
 console.log(gettingPhotos,"gettingPhotos")

  return (
  <li className="gif-wrap">
    <img src={props.url}alt=""/>
    <label>
    Favorite:
<input onClick={() => props.loadingFavorites(gettingPhotos)}
          name="favorite"
          type="checkbox"
          // checked={props.task.completeTask}
          />
   </label>
    </li>

);
}
export default Photo;
