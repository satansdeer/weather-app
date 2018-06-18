import React from "react";
import CitiesList from "./index";
import CityItem from "./CityItem";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";

const mockCities = [{ title: "City 1" }, { title: "City 2" }];
const mockOnClick = jest.fn();

describe("<CitiesList />", () => {
  it("renders and matches the snapshot", () => {
    const wrapper = shallow(
      <CitiesList cities={mockCities} currentCity={mockCities[0]} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("calls the provided onSelect callback when clicked ", () => {
    const wrapper = shallow(
      <CitiesList
        onSelect={mockOnClick}
        cities={mockCities}
        currentCity={mockCities[0]}
      />
    );
    wrapper
      .find(CityItem)
      .last()
      .prop("onSelect")();
    expect(mockOnClick).toHaveBeenCalled();
  });
});
