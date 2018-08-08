import React from 'react';
import Favorite from './Favorite'
import ApiManager from '../APIManager'
import FavoritesState from './FavoritesState'
//setting props
const AllFavoriteProps = props => {
    const results = props.data;
    let allFavorites = results.map(favorites =>

        <Favorite url={favorites.photoUrl}
            key={favorites.id}
            getAllFavorites={ApiManager.getAllFavorites}
            deleteFavorites= {ApiManager.deletePhoto}
            favorites={favorites}
            id={favorites.id}
            UserId={JSON.parse(localStorage.getItem('credentials')).id}
             />
             
    ); console.log(allFavorites, "props")


    return (
        <React-fragment>
            <div className="photo-list">
                {allFavorites}
                

            </div>
         

        </React-fragment>


    );
}

export default AllFavoriteProps;

