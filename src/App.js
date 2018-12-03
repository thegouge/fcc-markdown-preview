import React, {Component} from "react";
import marked from "marked";

import Editor from "./components/Editor";
import Preview from "./components/Preview";

import text from "./assets/defaultText";
import sanic from "./assets/Sanic.jpg";

import "./css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultImage: sanic,
      editorText: text
    };

    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event) {
    this.setState({
      editorText: event.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <Editor
          eventHandler={this.handleInput}
          defaultText={this.state.editorText}
        />

        <Preview
          markdown={marked(this.state.editorText)}
          sanic={this.state.defaultImage}
        />
      </div>
    );
  }
}

export default App;
