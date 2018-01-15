import * as React from 'react';
import { shallow } from 'enzyme';
import About from './About';
import Hello from './Hello';

test('render a About', () => {
  const wrapper = shallow(<About />);
  expect(wrapper).toMatchSnapshot();
});

test('Should have 1 Hello Component', () => {
  const wrapper = shallow(<About />);
  expect(wrapper.find(Hello)).toHaveLength(1);
});
