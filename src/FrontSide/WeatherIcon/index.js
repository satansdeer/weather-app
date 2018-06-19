import React from "react";

export const WeatherIcon = ({ icon, onClick }) => {
  return (
    <img
      src={`/icons/${icon}.svg`}
      width="120px"
      alt="weather icon"
      onClick={onClick}
    />
  );
};
