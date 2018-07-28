import React from 'react';
import Photo from './Photo';
import APIManager from '../APIManager'


const Favorite = props => {
    console.log(props,"PROPS")
   const gettingFavs = {
     photoId: props.photo.id,
     photoUrl: props.url
   }

  return (
  <li className="fav-wrap">
    <img src={props.url}alt=""/>
   
    </li>

);
}