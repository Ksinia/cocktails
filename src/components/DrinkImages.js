import React from "react";
import { Link } from "react-router-dom";

function DrinkImages(props) {
  const drinks = props.drinks;
  return (
    <div className="drinks-images">
      <h1>Drink Images</h1>
      This page will show images of the {decodeURIComponent(props.category)}.
      <br></br>
      <div>
        {drinks &&
          drinks.map(drink => (
            <div key={drink.id}>
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
