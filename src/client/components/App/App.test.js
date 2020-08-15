import React from "react";
import { shallow, mount } from "enzyme";
import App from "./component";
import toJson from "enzyme-to-json";
import DaysDisplay from "../DaysDisplay/component";

// Unit test - Render component in isolation
it("renders without crashing", () => {
    shallow(<App />);
});

// Integration test - Render component in its context
it("renders number of consecutive days", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(DaysDisplay)).toHaveLength(1);
});

it("renders correctly", () => {
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot();
});

