import React from 'react';
import ReactDOM from 'react-dom';
import Overlay from './Overlay';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const clicked = jest.fn();
  const rendered = renderer.create(<Overlay onOptionChosed={clicked} />);
  expect(rendered.toJSON()).toMatchSnapshot();
});
