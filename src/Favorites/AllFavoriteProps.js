import React from 'react';
import Favorite from './Favorite'
import ApiManager from '../APIManager'

//setting props
const AllFavoriteProps = props => {
    const results = props.data;
    let allFavorites = results.map(favorites =>

        <Favorite url={favorites.photoUrl}
            key={favorites.id}
            getAllFavorites={ApiManager.getAllFavorites}
            deleteFavorites= {props.deleteFavorites}
            favorites={favorites}
            id={favorites.id}
            UserId={JSON.parse(localStorage.getItem('credentials')).id}
             />
             
    ); 

    

    return (
        <React-fragment>
            
            <div className="photo-list">
                {allFavorites}
                

            </div>
            
         

        </React-fragment>


    );
}

export default AllFavoriteProps;

