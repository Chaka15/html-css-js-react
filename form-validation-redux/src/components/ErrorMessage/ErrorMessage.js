import React from "react";

const errorMessage = (props) => (
  <p style={{ color: "red" }}>{props.children}</p>
);

export default errorMessage;
