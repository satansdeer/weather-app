import React from "react";
import CityItem from "./index";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";

const mockCity = {
  title: "Mock City"
};
const mockOnClick = jest.fn();

describe("<CityItem />", () => {
  describe("when is selected", () => {
    it("renders and matches the snapshot", () => {
      const wrapper = shallow(<CityItem isSelected city={mockCity} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe("when is not selected", () => {
    it("renders and matches the snapshot", () => {
      const wrapper = shallow(<CityItem city={mockCity} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  it("calls the provided onSelect callback when clicked ", () => {
    const wrapper = shallow(
      <CityItem onSelect={mockOnClick} city={mockCity} />
    );
    wrapper.simulate("click");
    expect(mockOnClick).toHaveBeenCalled();
  });
});
