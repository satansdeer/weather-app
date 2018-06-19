import React from "react";
import moment from "moment";
import FrontSide from "./index";
import FrontSideView from "./FrontSideView";
import { Loader } from "./Loader";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";

import { getWeatherForLocation } from "../api";

const mockWeather = {
  currently: {
    summary: "Mock summary",
    icon: "mockIcon",
    temperature: "10",
    apparentTemperature: "12"
  }
};

jest.mock("../api", () => ({
  getWeatherForLocation: jest.fn(async () => mockWeather)
}));

const mockCity = {
  title: "Test city",
  woeid: 0
};

const mockOnFlip = jest.fn();

describe("<FrontSide />", () => {
  it("renders without crashing", () => {
    shallow(<FrontSide city={mockCity} />);
  });

  it("shows loader until weather is loaded", done => {
    const wrapper = shallow(<FrontSide city={mockCity} />);
    expect(wrapper.find(Loader).length).toEqual(1);
    process.nextTick(() => {
      wrapper.update();
      expect(wrapper.find(Loader).length).toEqual(0);
      expect(wrapper.find(FrontSideView).length).toEqual(1);
      done();
    });
  });

  it("fetches weather on update", () => {
    const wrapper = shallow(<FrontSide city={mockCity} />);
    expect(getWeatherForLocation).toHaveBeenCalledWith(mockCity);
    getWeatherForLocation.mockClear();

    const anotherCity = {
      title: "Another city",
      woeid: 1
    };
    wrapper.setProps({ city: anotherCity });
    expect(getWeatherForLocation).toHaveBeenCalledWith(anotherCity);
  });
});
