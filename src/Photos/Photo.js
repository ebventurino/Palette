import React from 'react';

// passing props - setting photo id, photo url, and userid
const Photo = props => {
  console.log(props)
 const gettingPhotos = {
   photoId: props.photo.id,
   photoUrl: props.url,
   userId: JSON.parse(localStorage.getItem('credentials')).userId
 }
 console.log(gettingPhotos,"gettingPhotos")

 // passing props that is the photo.url. creating checkbox.
  return (
    <div className="favoriteImages">
  <li className="photo-wrap">
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
</div>
);
}
export default Photo;