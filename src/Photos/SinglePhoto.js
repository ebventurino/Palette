import React from 'react';
import Photo from './Photo';
import APIManager from '../APIManager'

const SinglePhoto = props => {

  const results = props.data;
  let photos = results.map(photo =>

    <Photo url={photo.urls.regular}

      key={photo.id}

      loadingFavorites={APIManager.loadingFavorites}

      photo={photo} />

  );

  return (
    <React-fragment>
      <ul className="photo-list">
        {photos}
      </ul>


    </React-fragment>


  );
}

export default SinglePhoto;
