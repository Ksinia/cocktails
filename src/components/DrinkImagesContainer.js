import React, { Component } from "react";
import DrinkImages from "./DrinkImages";

class DrinkImagesContainer extends Component {
  state = {
    images: null
  };
  updateImages(images) {
    this.setState({
      images: images
    });
  }

  componentDidMount() {
    const drink = this.props.match.params.drink;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${drink}`)
      .then(res => res.json())
      .then(data =>
        this.updateImages(
          data.drinks.map(drink => {
            return drink.strDrinkThumb;
          })
          //   data.drinks
        )
      )
      .catch(console.error);
  }
  render() {
    return (
      <DrinkImages
        images={this.state.images}
        drink={this.props.match.params.drink}
      />
    );
  }
}

export default DrinkImagesContainer;
