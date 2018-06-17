import React from "react";
import PropTypes from "prop-types";
import { WeatherIcon } from "./WeatherIcon";
import "./card.css";
import optionsIcon from "./icon.svg";

const FrontSideView = ({
  summary,
  icon,
  temperature,
  apparentTemperature,
  date,
  currentCityTitle,
  onClick
}) => {
  return (
    <div className={`card is-${icon}`}>
      <div className="card-row">
        <div className="card-day">{date.format("dddd")}</div>
        <div className="card-day">{date.format("MMM Do")}</div>
      </div>
      <WeatherIcon icon={icon} onClick={this.onClick} />
      <div className="card-row">
        <div className="card-temperature">
          {parseInt(temperature, 10)}°
          <span className="small">/ {parseInt(apparentTemperature, 10)}°</span>
        </div>
        <div className="card-weather">{summary}</div>
      </div>
      <div className="card-line" />
      <div className="card-row">
        <div className="card-city">{currentCityTitle}</div>
        <img
          className="card-icon"
          src={optionsIcon}
          width="35px"
          alt="icont"
          onClick={onClick}
        />
      </div>
    </div>
  );
};

FrontSideView.propTypes = {
  summary: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  apparentTemperature: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  currentCityTitle: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default FrontSideView;
