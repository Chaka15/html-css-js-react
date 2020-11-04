import React, { Component } from "react";

import classes from "./SearchField.css";

const searchField = (props) => {
  return (
    <div className={classes.SearchField}>
      <input
        type="search"
        placeholder="Search for planets"
        onChange={props.onChange}
      />
      <button onClick={props.clicked}>Search</button>
    </div>
  );
};

export default searchField;
