import React from 'react';
import ReactDOM from 'react-dom';
import Move from './Move';
import { GameMoves } from '../Rules';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const clicked = jest.fn();
  const rendered = renderer.create(
    <div className="wrapper">
      <Move type={GameMoves.ROCK} onMoveClicked={clicked} />
      <Move type={GameMoves.PAPER} onMoveClicked={clicked} />
      <Move type={GameMoves.SCISSORS} onMoveClicked={clicked} />
      <Move type={GameMoves.PAPER} onMoveClicked={clicked} />
      <Move type={GameMoves.ROCK} onMoveClicked={clicked} />
    </div>
  );
  expect(rendered.toJSON()).toMatchSnapshot();
});
