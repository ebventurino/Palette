import React from 'react';
import Photo from './Photo';

const PhotoList = props => { 

  const results = props.data;
  let photos = results.map(photo => 
     <Photo url={photo.urls.small}/>
  );
    //  let gifs = results.map(title =>
    // <Gif url={gif.title})
  
  return(
    <ul className="photo-list">
      {photos}
    </ul> 
  );
}

export default PhotoList;
