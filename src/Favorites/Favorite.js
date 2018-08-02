import React from 'react';

// adding props, labeled as Favorite
const Favorite = props => {
  // favorites link to favorites.id and url
  const gettingFavorites = {
    photoId: props.favorites.id,
    photoUrl: props.url
  }



return (
  <React-fragment>
    
    <li className="photo-wrap">
      <img src={props.url} alt="" />
    </li>

  </React-fragment>
)
}

export default Favorite;
