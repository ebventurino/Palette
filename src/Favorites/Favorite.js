import React from 'react';

// adding props, labeled as Favorite
const Favorite = props => {
  // favorites link to favorites.id and url
  const gettingFavorites = {
    photoId: props.id,
    photoUrl: props.url,
    UserId: JSON.parse(localStorage.getItem('credentials')).id
  }

  console.log(JSON.parse(localStorage.getItem('credentials')).id)
 //rendering photo.url via props
return (
  <React-fragment>
    <li className="photo-wrap">
      <img src={props.url} alt="" />
      <button className="deleteButton" >delete</button>
   </li>

  </React-fragment>
)
}

export default Favorite;
