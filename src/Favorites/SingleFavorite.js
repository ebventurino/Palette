import React from 'react';
import Favorite from './Favorite'
import APIManager from '../APIManager'
import Comments from './Comments'
//setting props
const SingleFavorite = props => {

    const results = props.data;
    let allFavorites = results.map(favorites =>

        <Favorite url={favorites.photoUrl}
            key={favorites.id}
            getAllFavorites={APIManager.getAllFavorites}
            favorites={favorites} />
    ); console.log(allFavorites, "GET ALL FAVORITES")


    let allComments = results.map(comments =>
        <Comments key={comments.id}
            message={comments.message}
            favoriteId={comments.favoriteId} />



    );
    return (
        <React-fragment>
            <ul className="photo-list">
                {allFavorites}
                {allComments}
            </ul>


        </React-fragment>


    );
}

export default SingleFavorite;

