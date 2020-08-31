import React from 'react';
import { shallow } from 'enzyme';
import AppRout from './AppRout';

describe("AppRout", () => {
  it("should render my component", () => {
    const wrapper = shallow(<AppRout />);
    expect(wrapper).toMatchSnapshot();
  });
});