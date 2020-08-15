import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import Act from "./component";
import { BrowserRouter as Router } from "react-router-dom";

const mockAct = {
    content: 'test',
    datePosted: '2020-08-01T14:27:15.113Z',
    slug: 'test'
}

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Router><Act {...mockAct} /></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe("<Act />", () => {
    it("accepts mockAct props", () => {
        const wrapper = mount(<Router><Act {...mockAct} /></Router>);
        expect(wrapper.props().children.props.content).toEqual(mockAct.content);
        expect(wrapper.props().children.props.datePosted).toEqual(mockAct.datePosted);
        expect(wrapper.props().children.props.slug).toEqual(mockAct.slug);
    });
});