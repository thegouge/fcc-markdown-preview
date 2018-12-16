import React from "react";
import "../css/header.css";

const Header = (props) => {
  return (
    <div className="header" id={props.name + "-header"}>
      {props.name}
    </div>
  );
};

export default Header;
