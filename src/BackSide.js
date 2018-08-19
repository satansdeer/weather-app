import React from "react";
import CitiesList from "./CitiesList";

export default ({ cities, onClick, currentCity }) => {
  return (
    <div>
      <CitiesList cities={cities} currentCity={currentCity} />
      <button onClick={onClick}>Flip back</button>
    </div>
  );
};
