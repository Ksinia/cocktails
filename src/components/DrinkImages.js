import React from "react";
import { Link } from "react-router-dom";

function DrinkImages(props) {
  // const images = props.images.map(image => image.strDrinkThumb);
  const images = props.images;
  return (
    <div className="drinks-images">
      <h1>Drinks Images</h1>
      This page will show images of the {decodeURIComponent(props.drink)}.
      <br></br>
      <div>
        {images && images.map(url => <img src={url} alt="Drink" />)}
        {!images && "Loading..."}
      </div>
      <br></br>
      <Link to="/">Go back to the index</Link>
    </div>
  );
}

export default DrinkImages;
