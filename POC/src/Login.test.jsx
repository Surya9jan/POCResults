import React from 'react';
import LoginPage from './Login';
import { cleanup } from 'react-testing-library';
import { shallow } from 'enzyme';

afterEach(cleanup);
let wrapper;

beforeEach(() => {
    wrapper = shallow(<LoginPage/>);
});

it("should render my component", () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
  });

it('username should update the state when a value is input', () => {
    const username = 'amit';
    const input = wrapper.find('form').childAt(1).childAt(1);
    input.simulate('change', {
        target: {
            name: 'username',
            value: username
        }
    });
    expect(
        wrapper.state().fields.username
    ).toBe(username);
});

it('password should update the state when a value is input', () => {
    const password = 'admin';
    const input = wrapper.find('form').childAt(2).childAt(1);
    input.simulate('change', {
        target: {
            name: 'password',
            value: password
        }
    });
    expect(
        wrapper.state().fields.password
    ).toBe(password);
});

it('should display an error when wrong credentials entered or blank', () => {
    const submitbutton = wrapper.find('form').childAt(3).childAt(0);
    submitbutton.simulate('submit');
    expect(
        wrapper.state().fields.username
    ).not.toBe(null);

    expect(
        wrapper.state().fields.password
    ).not.toBe(null);
});

it('should load dashboard page on valid credentials', () => {

    const username = 'admin';
    const usernameinput = wrapper.find('form').childAt(1).childAt(1);
    usernameinput.simulate('change', {
        target: {
            name: 'username',
            value: username
        }
    });

    const password = 'admin';
    const passwordinput = wrapper.find('form').childAt(2).childAt(1);
    passwordinput.simulate('change', {
        target: {
            name: 'password',
            value: password
        }
    });
    const submitbutton = wrapper.find('form').childAt(3).childAt(0);
    submitbutton.simulate('submit');
    expect(
        wrapper.state().isValidForm
    ).toBeTruthy();
});



