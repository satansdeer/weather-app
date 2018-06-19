import React from "react";
import WeatherIcon from "./index";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";

describe("<WeatherIcon />", () => {
  it("renders and matches snapshot", () => {
    const wrapper = shallow(<WeatherIcon icon="testIcon" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
