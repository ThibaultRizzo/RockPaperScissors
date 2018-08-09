import React from 'react';
import ReactDOM from 'react-dom';
import PlayersHistory from './PlayersHistory';
import renderer from 'react-test-renderer';

const games = [
  [
    { moveP1: 'SCISSORS', moveP2: 'ROCK', result: 'LOSE' },
    { moveP1: 'SCISSORS', moveP2: 'ROCK', result: 'LOSE' },
    { moveP1: 'SCISSORS', moveP2: 'SCISSORS', result: 'DRAW' },
    {gameType
      :
      "AI vs AI", result: 'LOSE', scoreP1: 0, scoreP2: 2 }
  ],
  [
    { moveP1: 'PAPER', moveP2: 'ROCK', result: 'WIN' },
    { moveP1: 'SCISSORS', moveP2: 'ROCK', result: 'LOSE' },
    { moveP1: 'SCISSORS', moveP2: 'ROCK', result: 'LOSE' },
    { moveP1: 'PAPER', moveP2: 'PAPER', result: 'DRAW' },
    { moveP1: 'ROCK', moveP2: 'SCISSORS', result: 'WIN' },
    { gameType
      :
      "Player vs AI",result: 'DRAW', scoreP1: 2, scoreP2: 2 }
  ],
  [
    { moveP1: 'ROCK', moveP2: 'SCISSORS', result: 'WIN' },
    { moveP1: 'PAPER', moveP2: 'SCISSORS', result: 'LOSE' },
    { moveP1: 'PAPER', moveP2: 'SCISSORS', result: 'LOSE' },
    { moveP1: 'PAPER', moveP2: 'PAPER', result: 'DRAW' },
    { gameType
      :
      "Player vs AI",result: 'LOSE', scoreP1: 1, scoreP2: 2 }
  ]
];

it('renders correctly', () => {
  const rendered = renderer.create(<PlayersHistory gameHistory={games} />);
  expect(rendered.toJSON()).toMatchSnapshot();
});
