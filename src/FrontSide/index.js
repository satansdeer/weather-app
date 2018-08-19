import React, { Component } from "react";
import FrontSideView from "./FrontSideView";
import moment from "moment";

class FrontSide extends Component {
  render() {
    return (
      <FrontSideView
        date={moment()}
        icon="default"
        temperature={19}
        apparentTemperature={15}
        summary="Sunny"
        currentCityName="Stockholm"
      />
    );
  }
}

export default FrontSide;
