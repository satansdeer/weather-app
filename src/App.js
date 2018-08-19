import React, { Component } from "react";
import FrontSide from "./FrontSide";
import BackSide from "./BackSide";
import "./panel.css";
import cities from "./cities.json";

class App extends Component {
  state = { flipped: false };

  onFlip = () => {
    this.setState({ flipped: !this.state.flipped });
  };

  render() {
    return (
      <div className={`panel ${this.state.flipped ? "flip" : ""}`}>
        <div className="panel-front">
          <FrontSide onClick={this.onFlip} />
        </div>
        <div className="panel-back">
          <BackSide cities={cities} onClick={this.onFlip} />
        </div>
      </div>
    );
  }
}

export default App;
