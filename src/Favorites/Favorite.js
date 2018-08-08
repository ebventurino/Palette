import React from 'react';
import ApiManager from'../APIManager'
import Favorites from './Favorites'

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


  const deletePhoto = (id) => {
    ApiManager.deletePhoto(id)
        .then(() => {
            return ApiManager.getAllFavorites()
        })
        .then(() => {
            ApiManager.getAllFavorites()
            });
        ;

}
console.log(deletePhoto,"favorites")

 //rendering photo.url via props
return (
  <React-fragment>
    <li className="photo-wrap">
      <img src={props.url} alt="" />
      <button className="deleteButton"onClick={() => deletePhoto(gettingFavorites.id)}>delete</button>
   </li>

  </React-fragment>
)
}

export default Favorite;
