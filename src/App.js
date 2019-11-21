import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import CocktailsListContainer from "./components/CocktailsListContainer";
import { Route } from "react-router-dom";
import DrinkImagesContainer from "./components/DrinkImagesContainer";

function App() {
  return (
    <main>
      <Route exact path="/" component={CocktailsListContainer} />
      <Route path="/drinks/:drink" component={DrinkImagesContainer} />
    </main>
  );
}

export default App;
