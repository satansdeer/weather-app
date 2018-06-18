import React, { Component } from "react";
import PropTypes from "prop-types";
import CitiesList from "./CitiesList";
import "./button.css";

export default class BackSide extends Component {
  static propTypes = {
    cities: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    ),
    onChange: PropTypes.func,
    onSave: PropTypes.func,
    currentCity: PropTypes.shape({
      title: PropTypes.string.isRequired
    })
  };

  render() {
    const { cities, onChange, onSave, currentCity } = this.props;
    return (
      <div className="card-back">
        <CitiesList
          cities={cities}
          onSelect={onChange}
          currentCity={currentCity}
        />
        <button className="button" onClick={this.props.onSave}>
          Apply
        </button>
      </div>
    );
  }
}
