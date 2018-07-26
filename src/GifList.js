import React from 'react';
import Gif from './Gif';

const GifList = props => { 

  const results = props.data;
  let gifs = results.map(gif => 
     <Gif url={gif.urls.small}/>
  );
    //  let gifs = results.map(title =>
    // <Gif url={gif.title})
  
  return(
    <ul className="gif-list">
      {gifs}
    </ul> 
  );
}

export default GifList;
