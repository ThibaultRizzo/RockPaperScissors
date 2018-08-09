import React from 'react';
import ReactDOM from 'react-dom';
import MoveContainer from './MoveContainer';
import renderer from 'react-test-renderer';
import { GameType } from '../Rules';

it('renders correctly', () => {
  const clicked = jest.fn();
  const startState = {
    isGameFinished: false,
    maxturnCount: 4,
    gameType: GameType.AIVsAI
  };
  const rendered = renderer.create(
    <MoveContainer
      isGameFinished={startState.isGameFinished}
      maxturnCount={startState.maxturnCount}
      gameType={startState.gameType}
      onMoveClicked={clicked}
    />
  );
  expect(rendered.toJSON()).toMatchSnapshot();
});
