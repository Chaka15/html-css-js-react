import React, { Component } from "react";

import classes from "./App.css";
import HomePage from "./containers/HomePage/HomePage";
import Favorites from "./components/Favorites/Favorites";
import PlanetPage from "./containers/PlanetPage/PlanetPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Switch>
            <Route path="/favorites" exact component={Favorites} />
            <Route path="/" exact component={HomePage} />
            <Route path="/:id" component={PlanetPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
