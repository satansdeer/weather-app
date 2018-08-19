import React, { Component } from "react";
import FrontSide from "./FrontSide";
import moment from "moment";
import "./panel.css";

class App extends Component {
  render() {
    return (
      <div className="panel">
        <div className="panel-front">
          <FrontSide
            date={moment()}
            icon="default"
            temperature={19}
            apparentTemperature={15}
            currentCityName="Stockholm"
          />
        </div>
        <div className="panel-back">Panel Back</div>
      </div>
    );
  }
}

export default App;
