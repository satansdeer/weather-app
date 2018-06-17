import React, { Component } from "react";
import { BackSide } from "./BackSide";
import { FrontSide } from "./FrontSide";
import "./panel.css";
import cities from "./cities.json";

class App extends Component {
  state = { flipped: false, currentCity: cities[0] };

  onFlip = () => {
    this.setState({
      flipped: !this.state.flipped
    });
  };

  onCityChange = city => {
    this.setState({
      currentCity: city
    });
  };

  render() {
    return (
      <div className={`panel ${this.state.flipped ? "flip" : null}`}>
        <div className="front">
          <FrontSide onClick={this.onFlip} city={this.state.currentCity} />
        </div>
        <div className="back">
          <BackSide
            cities={cities}
            onChange={this.onCityChange}
            onSave={this.onFlip}
            currentCity={this.state.currentCity}
          />
        </div>
      </div>
    );
  }
}

export default App;
