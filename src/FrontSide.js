import React from "react";

export default ({
  date,
  icon,
  temperature,
  apparentTemperature,
  currentCityName
}) => {
  return (
    <div>
      <div>{date.format("dddd")}</div>
      <div>{date.format("MMM Do")}</div>
      <div>{icon}</div>
      <div>{`${temperature}°`}</div>
      <div>{`${apparentTemperature}°`}</div>
      <div>{currentCityName}</div>
    </div>
  );
};
