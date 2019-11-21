import React, { Component } from "react";
import CocktailsList from "./CocktailsList";

export default class CocktailsListContainer extends Component {
  state = { cocktails: null };

  updateDrinks(drinks) {
    this.setState({
      cocktails: drinks
    });
    console.log(this.state.cocktails);
  }

  componentDidMount() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
      .then(res => res.json())
      .then(data => {
        const cocktails = data.drinks.map(drink => drink.strCategory);
        console.log(cocktails);
        this.updateDrinks(cocktails);
      });
  }
  render() {
    return <CocktailsList cocktails={this.state.cocktails} />;
  }
}
