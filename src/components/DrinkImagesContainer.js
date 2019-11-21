import React, { Component } from "react";
import DrinkImages from "./DrinkImages";

class DrinkImagesContainer extends Component {
  state = {
    drinks: null
  };
  updateDrinks(drinks) {
    this.setState({
      drinks: drinks
    });
  }

  componentDidMount() {
    const drink = this.props.match.params.drink;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${drink}`)
      .then(res => res.json())
      .then(data =>
        this.updateDrinks(
          data.drinks.map(drink => ({
            id: drink.idDrink,
            imageUrl: drink.strDrinkThumb,
            name: drink.strDrink
          }))
        )
      )
      .catch(console.error);
  }
  render() {
    return (
      <DrinkImages
        drinks={this.state.drinks}
        category={this.props.match.params.drink}
      />
    );
  }
}

export default DrinkImagesContainer;
