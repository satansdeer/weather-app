import React, { Component } from "react";
import FrontSideView from "./FrontSideView";
import moment from "moment";
import { getWeatherForLocation } from "../api";

class FrontSide extends Component {
  state = { currentWeather: null };

  componentDidMount() {
    getWeatherForLocation(this.props.currentCity).then(weather => {
      this.setState({ currentWeather: weather.currently });
    });
  }

  render() {
    if (!this.state.currentWeather) {
      return null;
    }

    const {
      icon,
      temperature,
      apparentTemperature,
      summary
    } = this.state.currentWeather;

    return (
      <FrontSideView
        date={moment()}
        icon={icon}
        temperature={temperature}
        apparentTemperature={apparentTemperature}
        summary={summary}
        currentCityName="Stockholm"
        onClick={this.props.onClick}
      />
    );
  }
}

export default FrontSide;
