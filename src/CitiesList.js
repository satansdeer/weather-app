import React from "react";
import "./list.css";

export default ({ cities, currentCity }) => {
  return (
    <ul className="list">
      {cities.map(city => {
        return (
          <li
            key={city.woeid}
            className={`list-item ${
              currentCity.title === city.title ? "is-selected" : ""
            }`}
          >
            {city.title}
          </li>
        );
      })}
    </ul>
  );
};
