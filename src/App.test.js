import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const clicked = jest.fn();
  const rendered = renderer.create(<App />);
  expect(rendered.toJSON()).toMatchSnapshot();
});
