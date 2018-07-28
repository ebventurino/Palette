import React from 'react';
import Favorites from './Favorites'
import APIManager from '../APIManager'

const SingleFavorite = props => {

    const results = props.data;
    let favorite = results.map(favorite =>

        <Favorites url={favorite.photoUrl}
            key={favorite.id}
            getAllFavorites={APIManager.getAllFavorites}
            favorite={favorite} />

    );

    return (
        <React-fragment>
            <ul className="photo-list">
                {favorite}
            </ul>


        </React-fragment>


    );
}

export default SingleFavorite;
