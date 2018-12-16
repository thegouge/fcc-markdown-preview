import React from "react";
import Header from "./Header";
import "../css/preview.css";

const Preview = (props) => {
  return (
    <div className="preview-window">
      <Header name="Preview" />
      <div id="preview" dangerouslySetInnerHTML={{__html: props.markdown}} />
    </div>
  );
};

export default Preview;
