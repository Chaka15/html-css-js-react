import React, { Component } from "react";

import classes from "./Cards.css";
import Spinner from "../../components/UI/Spinner/Spinner";
import axios from "axios";
import Card from "../../components/Card/Card";

class Cards extends Component {
  state = {
    loading: false,
    planets: null,
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("https://swapi.dev/api/planets/")
      .then((res) => {
        this.setState({
          loading: false,
          planets: res.data.results.splice(0, 7),
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    let spinner = null;
    if (this.state.loading) {
      spinner = <Spinner />;
    }
    let planetCards = <Spinner />;
    if (this.state.planets) {
      planetCards = this.state.planets.map((planet, i) => {
        return (
          <Card
            name={planet.name}
            gravity={planet.gravity}
            population={planet.population}
            key={planet.name}
            id={i + 1}
          />
        );
      });
    }

    return <div className={classes.Cards}>{planetCards}</div>;
  }
}

export default Cards;
