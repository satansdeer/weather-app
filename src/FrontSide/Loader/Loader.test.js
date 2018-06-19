import React from "react";
import { shallow } from "enzyme";
import Loader from "./index.js";

describe("<Loader />", () => {
  it("renders without crashing", () => {
    shallow(<Loader />);
  });
});
