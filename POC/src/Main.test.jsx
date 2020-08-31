import React from 'react';
import Main from './Main';
import About from './About';
import Team from "./Team";
import { cleanup } from 'react-testing-library';
import { shallow, mount } from 'enzyme';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

describe("Main", () => {
  it("should render my right side menu link page", () => {
    const wrapper = shallow(<Main />);
    expect(wrapper).toMatchSnapshot();
  });


  
  // it('should update the page when select a menu list', () => {
  //   const wrapper = shallow(<Main />);
  //   const aboutPagelink = wrapper.find(NavLink).at(1);
  //   aboutPagelink.simulate('click');
  //   expect(window.location.hash).toBe('#/about');
  // })
});