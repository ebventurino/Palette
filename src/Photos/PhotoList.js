import React from 'react';
import Photo from './Photo';

const PhotoList = props => { 

  const results = props.data;
  let photos = results.map(photo => 
     <Photo url={photo.urls.regular}
     key={photo.id}/>
  );
    //  let gifs = results.map(title =>
    // <Gif url={gif.title})
  
  
  
  
  return(
    <React-fragment>
    <ul className="photo-list">
      {photos}
    </ul> 
    
     
   </React-fragment>

  
  );
}

export default PhotoList;
