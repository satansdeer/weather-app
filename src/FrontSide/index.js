import React, { Component } from "react";
import FrontSideView from "./FrontSideView";
import moment from "moment";
import { getWeatherForLocation } from "../api";
import cities from "../cities.json";

class FrontSide extends Component {
  componentDidMount() {
    getWeatherForLocation(cities[0]).then(console.log);
  }

  render() {
    return (
      <FrontSideView
        date={moment()}
        icon="default"
        temperature={19}
        apparentTemperature={15}
        summary="Sunny"
        currentCityName="Stockholm"
      />
    );
  }
}

export default FrontSide;
