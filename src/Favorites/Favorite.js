import React from 'react';
import AllFavoriteProps from "./AllFavoriteProps"

// adding props, labeled as Favorite
const Favorite = props => {
  // favorites link to favorites.id and url
  const gettingFavorites = {
    photoId: props.id,
    photoUrl: props.url,
    UserId: JSON.parse(localStorage.getItem('credentials')).id,
    id: props.id
  }

  console.log(JSON.parse(localStorage.getItem('credentials')).id)


      
console.log(props, "props")

 //rendering photo.url via props
return (
  <React-fragment>
    <li className="photo-wrap">
      <img src={props.url} alt="" />
      <button className="deleteButton"onClick={() => props.deleteFavorites(gettingFavorites.id)}>delete</button>
   </li>

  </React-fragment>
)
}

export default Favorite;
