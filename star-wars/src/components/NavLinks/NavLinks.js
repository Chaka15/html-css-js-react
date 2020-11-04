import React from "react";

import classes from "./NavLinks.css";
import { NavLink } from "react-router-dom";

const navLinks = (props) => (
  <div className={classes.NavLinks}>
    <NavLink to="/" exact activeClassName={classes.activeClass}>
      HOME
    </NavLink>
    <NavLink to="/favorites" activeClassName={classes.activeClass}>
      FAVS
    </NavLink>
  </div>
);

export default navLinks;
