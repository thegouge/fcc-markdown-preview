import React, {Component} from "react";
import markdown from "marked";

import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Footer from "./components/Footer";

import text from "./assets/otherText";

import "./css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorText: text,
      marked: markdown,
      renderFunc: new markdown.Renderer()
    };

    this.handleInput = this.handleInput.bind(this);
    this.makeCustomMarked = this.makeCustomMarked.bind(this);
  }
  handleInput(event) {
    this.setState({
      editorText: event.target.value
    });
  }
  makeCustomMarked(marked) {
    const newMarkdown = marked;
    const renderer = new newMarkdown.Renderer();
    renderer.link = (href, title, text) => {
      return `<a href="${href}" ${
        title ? "title=" + title : ""
      } target="_blank">${text}</a>`;
    };
    this.setState({
      marked: newMarkdown,
      renderFunc: renderer
    });
  }
  componentDidMount() {
    this.makeCustomMarked(markdown);
  }
  render() {
    return (
      <div className="App">
        <Editor
          eventHandler={this.handleInput}
          defaultText={this.state.editorText}
        />

        <Preview
          markdown={this.state.marked(this.state.editorText, {
            breaks: true,
            renderer: this.state.renderFunc
          })}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
