import React from 'react';
import APIManager from '../APIManager'


const Favorite = props => {
    console.log(props,"PROPS")
   const gettingFavs = {
    photoId: props.photoId,
    photoUrl: props.photoUrl 
    }
    console.log(gettingFavs, "gettingfavorites")

  return (
  <li className="fav-wrap">
    <img src={props.favorite}alt=""/>
   
    </li>

);
}

export default Favorite;