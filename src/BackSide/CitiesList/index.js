import React from "react";
import PropTypes from "prop-types";
import { CityItem } from "./CityItem";
import "./list.css";

const CitiesList = ({ onSelect, cities, currentCity }) => {
  return (
    <ul className="list">
      {cities.map(city => (
        <CityItem
          key={city.title}
          isSelected={city.title === currentCity.title}
          onSelect={onSelect}
          city={city}
        />
      ))}
    </ul>
  );
};

CitiesList.propTypes = {
  onSelect: PropTypes.func,
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    })
  ),
  currentCity: PropTypes.shape({
    title: PropTypes.string.isRequired
  })
};

export default CitiesList;
