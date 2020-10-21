import React, { Component, useState } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      para: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      para: `Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy`
    });
  }
  render() {
    return (
      <div id="main">
        {/* Do not remove this main div!! */}
        <button id="click" onClick={this.handleClick}>
          click
        </button>
        <p id="para">{this.state.para}</p>
      </div>
    );
  }
}

export default App;
