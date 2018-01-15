import * as React from 'react';
import { shallow, mount } from 'enzyme';
import Hello from './Hello';

// Testing basic component rendering
it('renders the correct text when no enthusiasm level is given', () => {
  const hello = shallow(<Hello name="Ayan" />);
  expect(hello.find('.greeeting').text()).toEqual('Hello Ayan!');
});

it('renders the correct text with an explicit enthusiasm level of 5', () => {
  const hello = shallow(<Hello name="Ayan" enthusiasmLevel={5} />);
  expect(hello.find('.greeeting').text()).toEqual('Hello Ayan!!!!!');
  expect(hello).toMatchSnapshot();
});

// Testing props
xit('Check the props', () => {
  const hello = shallow(<Hello name="Ayan" />);
  expect(hello.prop('name')).toEqual('Ayan');
});

// Full rendering.
it('simulates click events', () => {
  const onIncrement = jest.fn();
  const wrapper = mount((
    <Hello
      name="Ayan"
      onIncrement={onIncrement}
    />
  ));
  wrapper.find('.increment').simulate('click');
  expect(onIncrement.mock.calls.length).toBe(1);
});

// Check for data sumo test.
it('renders the correct text when no enthusiasm level is given', () => {
  const hello = shallow(<Hello name="Ayan" />);
  expect(hello.find('[data-sumo-test="hello"]')).toHaveLength(1);
});
