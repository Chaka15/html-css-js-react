import React, { Component } from "react";

import axios from "axios";
import classes from "./PlanetPage.css";
import NavLinks from "../../components/NavLinks/NavLinks";
import Spinner from "../../components/UI/Spinner/Spinner";

class PlanetPage extends Component {
  state = {
    loadedPlanet: null,
  };
  componentDidMount() {
    axios
      .get("https://swapi.dev/api/planets/" + this.props.match.params.id)
      .then((res) => {
        this.setState({ loadedPlanet: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let planet = <Spinner />;
    if (this.state.loadedPlanet) {
      planet = (
        <div className={classes.PlanetCard}>
          <p>Name: {this.state.loadedPlanet.name}</p>
          <p>Gravity: {this.state.loadedPlanet.gravity}</p>
          <p>Population: {this.state.loadedPlanet.population}</p>
        </div>
      );
    }
    return (
      <div className={classes.PlanetPage}>
        <div className={classes.div}>
          <NavLinks className={classes.NavLinks} />
        </div>
        {planet}
      </div>
    );
  }
}

export default PlanetPage;
