import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CocktailsList extends Component {
  render() {
    return (
      <div className="dogs-list">
        <h1>List of drinks</h1>
        {!this.props.cocktails && "Loading..."}
        {this.props.cocktails && (
          <ul>
            {this.props.cocktails.map(cocktail => {
              return (
                <li key={cocktail}>
                  <Link to={`/drinks/${encodeURIComponent(cocktail)}`}>
                    {cocktail}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}
