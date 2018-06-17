import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { getWeatherForLocation } from "../api";
import FrontSideView from "./FrontSideView.js";
import { Loader } from "./Loader";

export class FrontSide extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    city: PropTypes.shape({
      woeid: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    })
  };

  state = { currentWeather: null, date: moment(), prevCityId: null };

  updateWeather() {
    getWeatherForLocation(this.props.city).then(weather => {
      this.setState({ currentWeather: weather.currently });
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.city.woeid !== prevState.prevCityId) {
      return {
        prevCityId: nextProps.city.woeid,
        currentWeather: null
      };
    }

    return null;
  }

  componentDidMount() {
    this.updateWeather();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentWeather) {
      return;
    }
    this.updateWeather();
  }

  render() {
    if (!this.state.currentWeather) {
      return <Loader />;
    }

    const {
      summary,
      icon,
      temperature,
      apparentTemperature
    } = this.state.currentWeather;
    const { date } = this.state;
    const { city } = this.props;
    return (
      <FrontSideView
        summary={summary}
        icon={icon}
        temperature={temperature}
        apparentTemperature={apparentTemperature}
        date={date}
        currentCityTitle={city.title}
        onClick={this.props.onClick}
      />
    );
  }
}
