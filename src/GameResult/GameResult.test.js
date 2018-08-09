import React from 'react';
import ReactDOM from 'react-dom';
import GameResult from './GameResult';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const startState = {
    isGameFinished: true,
    turnArray: [
      { moveP1: 'ROCK', moveP2: 'PAPER', result: 'LOSE' },
      { moveP1: 'PAPER', moveP2: 'SCISSORS', result: 'LOSE' },
      { moveP1: 'SCISSORS', moveP2: 'SCISSORS', result: 'DRAW' }
    ]
  };
  const rendered = renderer.create(
    <GameResult
      isGameFinished={startState.isGameFinished}
      turnArray={startState.turnArray}
      turnCount={startState.turnCount}
    />
  );
  expect(rendered.toJSON()).toMatchSnapshot();
});
