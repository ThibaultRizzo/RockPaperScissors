import React, { Component } from 'react';
import { Result } from './Rules.js';

class GameResult extends Component {
  getResolveLine() {
    let result = null,
      turn = this.props.turn;
    if (!this.props.turn) {
      result = false;
    } else if (Result.WIN === turn.result) {
      result = <p>You won !</p>;
    } else if (Result.LOSE === turn.result) {
      result = <p>You lost !</p>;
    } else {
      result = <p>It's a draw !</p>;
    }
    return result;
  }

  render() {
    let moveP1, moveP2;
    let result = this.getResolveLine();
    if (this.props.turn && result) {
      moveP1 = this.props.turn.moveP1;
      moveP2 = this.props.turn.moveP2;
    } else {
      return false;
    }
    return (
      <div id="GameResult">
        <p>You chose {moveP1}</p>
        <p>The computer chose {moveP2}</p>
        {result}
      </div>
    );
  }
}

export default GameResult;
