import React from "react";
import PropTypes from "prop-types";

const WeatherIcon = ({ icon, onClick }) => {
  return (
    <img
      src={`/icons/${icon}.svg`}
      width="120px"
      alt="weather icon"
      onClick={onClick}
    />
  );
};

WeatherIcon.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func
};

export default WeatherIcon;
