import React from 'react';


const Favorite = props => {
  console.log(props)
 const gettingFavorites = {
   photoId: props.favorites.id,
   photoUrl: props.url
 }
 console.log(gettingFavorites,"gettingPhotos")

  return (
  <li className="gif-wrap">
    <img src={props.url}alt=""/>
    </li>

);
}
export default Favorite;