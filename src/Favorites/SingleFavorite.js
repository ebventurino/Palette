import React from 'react';
import Favorite from './Favorite'
import APIManager from '../APIManager'

const SingleFavorite = props => {

    const results = props.data;
    let allFavorites = results.map(favorites =>

        <Favorite url={favorites.photoUrl}
            key={favorites.id}
            getAllFavorites={APIManager.getAllFavorites}
            favorites={favorites} />
    );console.log(allFavorites,"GET ALL FAVORITES")


    return (
        <React-fragment>
            <ul className="photo-list">
                {allFavorites}
            </ul>


        </React-fragment>


    );
}

export default SingleFavorite;


