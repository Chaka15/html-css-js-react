import React from "react";

import classes from "./Logo.css";
import starWarsLogo from "../../../assets/images/sw.png";

const logo = () => (
  <div className={classes.Logo}>
    <img src={starWarsLogo} alt="logo" />
  </div>
);

export default logo;
