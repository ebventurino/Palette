import React from 'react';

// adding props, labeled as Favorite
const Favorite = props => {
  console.log(props)
  // favorites link to favorites.id and url
 const gettingFavorites = {
   photoId: props.favorites.id,
   photoUrl: props.url
 }
 console.log(gettingFavorites,"gettingPhotos")

  return (
  <li className="fav-wrap">
    <img src={props.url}alt=""/>
    </li>

);
}
export default Favorite;
