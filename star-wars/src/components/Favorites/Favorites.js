import React from "react";

import classes from "./Favorites.css";
import NavLinks from "../NavLinks/NavLinks";

const favorites = (props) => (
  <div className={classes.Favorites}>
    <NavLinks />
  </div>
);

export default favorites;
