import React from "react";
import "../css/preview.css";

const Preview = (props) => {
  return (
    <div className="preview-window">
      <div id="preview" dangerouslySetInnerHTML={{__html: props.markdown}} />
    </div>
  );
};

export default Preview;
