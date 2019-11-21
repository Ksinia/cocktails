import React from "react";
import { Link } from "react-router-dom";
import "./DrinkImages.css";

function DrinkImages(props) {
  const drinks = props.drinks;
  return (
    <div className="drinks-images">
      <h1>Drink Images</h1>
      This page will show images of the {decodeURIComponent(props.category)}.
      <br></br>
      <div className="images">
        {drinks &&
          drinks.map(drink => (
            <div className="drinkimage" key={drink.id}>
              <p>{drink.name}</p>
              <img src={drink.imageUrl} alt={drink.name} />
            </div>
          ))}
        {!drinks && "Loading..."}
      </div>
      <br></br>
      <Link to="/">Go back to the index</Link>
    </div>
  );
}

export default DrinkImages;
