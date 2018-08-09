import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const startState = { isGameFinished: false, setGameType: jest.fn() };
  const rendered = renderer.create(
    <Header
      isGameFinished={startState.isGameFinished}
      onCreateNewGame={startState.setGameType}
    />
  );
  expect(rendered.toJSON()).toMatchSnapshot();
});
