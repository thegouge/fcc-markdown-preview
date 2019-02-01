import React from "react";
import "../css/header.css";

const Header = (props) => {
  return (
    <div className="header" id={props.name + "-header"}>
      <h3>{props.name}</h3>
    </div>
  );
};

export default Header;
