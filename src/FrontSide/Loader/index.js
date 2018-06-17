import React from "react";
import loader from "./loader.svg";
import "./loader.css";

export const Loader = () => {
  return (
    <div className="loader">
      <img src={loader} alt="spinner" className="loader-spinner" />
    </div>
  );
};
