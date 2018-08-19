import React, { Component } from "react";
import FrontSide from "./FrontSide";
import "./panel.css";

class App extends Component {
  render() {
    return (
      <div className="panel">
        <div className="panel-front">
          <FrontSide />
        </div>
        <div className="panel-back">Panel Back</div>
      </div>
    );
  }
}

export default App;
