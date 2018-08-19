import React from "react";
import "./card.css";
import optionsImage from "./options.svg";

export default ({
  date,
  icon,
  temperature,
  summary,
  apparentTemperature,
  currentCityName
}) => {
  return (
    <div className="card is-clear-day">
      <div className="card-row">
        <div className="card-day">{date.format("dddd")}</div>
        <div className="card-day">{date.format("MMM Do")}</div>
      </div>
      <img src="/icons/clear-day.svg" alt="clear-day" width="120px" />
      <div className="card-row">
        <div className="card-temperature">
          {`${temperature}°`}
          <span className="small">/ {apparentTemperature}°</span>
        </div>
        <div className="card-weather">{summary}</div>
      </div>
      <div className="card-line" />
      <div className="card-row">
        <div className="card-city">{currentCityName}</div>
        <button className="card-options">
          <img src={optionsImage} width={32} alt="options" />
        </button>
      </div>
    </div>
  );
};
