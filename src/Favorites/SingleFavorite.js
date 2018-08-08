import React from 'react';
import Favorite from './Favorite'
import APIManager from '../APIManager'
//setting props
const SingleFavorite = props => {

    const results = props.data;
    let allFavorites = results.map(favorites =>

        <Favorite url={favorites.photoUrl}
            key={favorites.id}
            getAllFavorites={APIManager.getAllFavorites}
            deleteFavorites={APIManager.deletePhoto}
            favorites={favorites}
            id={favorites.id}
            UserId={JSON.parse(localStorage.getItem('credentials')).id}
             />
             
    ); console.log(allFavorites, "GET ALL FAVORITES")


    return (
        <React-fragment>
            <div className="photo-list">
                {allFavorites}
                

            </div>
         

        </React-fragment>


    );
}

export default SingleFavorite;

