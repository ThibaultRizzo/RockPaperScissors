import React from 'react';
import ReactDOM from 'react-dom';
import ModalPopup from './ModalPopup';
import renderer from 'react-test-renderer';
import { Result, GameMoves } from './Rules';

it('renders correctly', () => {
  const startState = {
    closed: jest.fn(),
    result: Result.LOSE
  };
  const rendered = renderer.create(
    <ModalPopup closePopup={startState.closed} result={startState.result} />
  );
  expect(rendered.toJSON()).toMatchSnapshot();
});
