import React, { Component } from "react";

export default class CocktailsList extends Component {
  render() {
    return (
      <div className="dogs-list">
        <h1>List of cocktails</h1>
        {!this.props.cocktails && "Loading..."}
        {this.props.cocktails && (
          <ul>
            {this.props.cocktails.map(cocktail => {
              return <li key={cocktail}>{cocktail}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}
