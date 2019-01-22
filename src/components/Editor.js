import React from "react";
import Header from "./Header";
import "../css/editor.css";

const Editor = (props) => {
  return (
    <div className="editor-window">
      <Header name="Editor" />
      <textarea
        id="editor"
        value={props.defaultText}
        onChange={props.eventHandler}
      />
    </div>
  );
};

export default Editor;
