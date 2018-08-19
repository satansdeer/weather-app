import React from "react";
import CitiesList from "./CitiesList";

export default ({ cities, onClick }) => {
  return (
    <div>
      <CitiesList cities={cities} />
      <button onClick={onClick}>Flip back</button>
    </div>
  );
};
