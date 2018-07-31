import React from 'react';

// adding props, labeled as Favorite
const Favorite = props => {
  console.log(props)
  // favorites link to favorites.id and url
  const gettingFavorites = {
    photoId: props.favorites.id,
    photoUrl: props.url
  }
  console.log(gettingFavorites, "gettingPhotos")

  return (
    <React-fragment>
      <li className="gif-wrap">
        <img src={props.url} alt="" />
      </li>
      <div className="comments">
      <form>
        <label>
          Comment:
    <input type="Comment" name="Comment" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>

    </React-fragment>
  )
}
export default Favorite;
