import React from 'react';
import ReactDOM from 'react-dom';
import GameResult from './GameResult';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
      const props = {
        "isGameFinished": false,
        "turnArray": [{
          "moveP1": "PAPER",
          "moveP2": "SCISSORS",
          "result": "LOSE"
        }, {
          "moveP1": "ROCK",
          "moveP2": "SCISSORS",
          "result": "WIN"
        }],
        "turnNumber": 2
      };
      const tree = renderer
        .create( < GameResult isGameFinished = {
            props.isGameFinished
          }
          turnArray = {
            props.turnArray
          }
          turnNumber = {
            props.turnNumber
          }
          />)
          .toJSON(); expect(tree).toMatchInlineSnapshot(`
<a
  className="normal"
  href="https://prettier.io"
  onMouseEnter={[Function]}
  onMouseLeave={[Function]}
>
  Prettier
</a>
`);
console.log(tree.toJSON());
        });