import React from "react";
import "./Card.css";

const Card = (props) => {
  return <div className="white-space">{props.children}</div>;
};

export default Card;
