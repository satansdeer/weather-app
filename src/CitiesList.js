import React from "react";
import "./list.css";

export default ({ cities }) => {
  return (
    <ul className="list">
      {cities.map(city => {
        return <li className="list-item">{city.title}</li>;
      })}
    </ul>
  );
};
