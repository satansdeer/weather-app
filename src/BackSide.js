import React from "react";
import CitiesList from "./CitiesList";

export default ({ onClick }) => {
  return <div><CitiesList/><button onClick={onClick}>Flip back</button></div>
};
