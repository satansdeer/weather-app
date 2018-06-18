import React from "react";
import BackSide from "./index";
import CitiesList from "./CitiesList";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";

const mockCities = [{ title: "City 1" }, { title: "City 2" }];
const mockOnSave = jest.fn();
const mockOnChange = jest.fn();

describe("<BackSide />", () => {
  it("renders and matches the snapshot", () => {
    const wrapper = shallow(
      <BackSide cities={mockCities} currentCity={mockCities[0]} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("event handlers", () => {
    const wrapper = shallow(
      <BackSide
        onSave={mockOnSave}
        onChange={mockOnChange}
        cities={mockCities}
        currentCity={mockCities[0]}
      />
    );

    it("calls the provided onChange callback when CitiesList onSelect triggered", () => {
      wrapper
        .find(CitiesList)
        .last()
        .prop("onSelect")();
      expect(mockOnChange).toHaveBeenCalled();
    });

    it("calls the provided onSave callback when save button clicked", () => {
      wrapper
        .find("button")
        .last()
        .simulate("click");
      expect(mockOnSave).toHaveBeenCalled();
    });
  });
});
