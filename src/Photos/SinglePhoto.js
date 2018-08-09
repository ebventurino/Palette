import React from 'react';
import Photo from './Photo';
import APIManager from '../APIManager'
// calling SinglePhoto variable and setting it to props
const SinglePhoto = props => {
// setting results to props' data
  const results = props.data;
  //looping through the photos
  let photos = results.map(photo =>
    


    <Photo url={photo.urls.regular}
//setting key to photo.id
      key={photo.id}

      loadingFavorites={APIManager.loadingFavorites}

      photo={photo} />

  );
  //posting a single photo?
  return (
    <React-fragment>
      <ul className="photo-list">
        {photos}
        
      </ul>


    </React-fragment>


  );
}

export default SinglePhoto;