import React from "react";
import "../css/editor.css";

const Editor = (props) => {
  return (
    <div className="editor-window">
      <textarea
        id="editor"
        value={props.defaultText}
        onChange={props.eventHandler}
      />
    </div>
  );
};

export default Editor;
