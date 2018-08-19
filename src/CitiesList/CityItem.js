import React from "react";

export default class CityItem extends React.Component {
  render() {
    const { city, isSelected } = this.props;

    return (
      <li className={`list-item ${isSelected ? "is-selected" : ""}`}>
        {city.title}
      </li>
    );
  }
}
