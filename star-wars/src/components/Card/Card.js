import React, { Component } from "react";

import classes from "./Card.css";
import { Link } from "react-router-dom";

class Card extends Component {
  componentDidMount() {}
  render() {
    return (
      <Link className={classes.Card} to={"/" + this.props.id}>
        <p className={classes.Name}>{this.props.name}</p>
        <p>{this.props.gravity}</p>
        <p>{this.props.population}</p>
      </Link>
    );
  }
}

export default Card;
