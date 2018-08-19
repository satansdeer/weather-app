import React from "react";
import CitiesList from "./CitiesList";
import "./button.css";

export default ({ cities, onClick, currentCity, onSelect }) => {
  return (
    <div className="card-back">
      <CitiesList
        cities={cities}
        currentCity={currentCity}
        onSelect={onSelect}
      />
      <button className="button" onClick={onClick}>
        Flip back
      </button>
    </div>
  );
};
