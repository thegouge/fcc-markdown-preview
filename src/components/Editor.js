import React from "react";
import Header from "./Header";
import "../css/editor.css";

const Editor = (props) => {
  return (
    <div className="editor-window">
      <Header name="editor" />
      <textarea
        id="editor"
        value={props.defaultText}
        onChange={props.eventHandler}
      />
    </div>
  );
};

export default Editor;
