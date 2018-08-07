import React, { Component } from 'react';
import { Result } from './Rules.js';

function TurnNumber(props) {
  const numberArray = Array.from(Array(props.turnNumber).keys());
  const turns = numberArray.map(
    number => <th className="turn-number">{number}</th>
  );
  return turns;
}
function MovesList(props) {
  let moves = 
  moves.push(props.moves.map(
    (move,i) => <td key={i} className={move.win}>{move.value}</td>
  ));
  return moves; 
}

class GameResult extends Component {
  constructor(props) {
    super(props);
    this.state({
      movesP1: [],
      movesP2: [],
    });
  }
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
    let turnNumber = resolveTurnNUm
    p1moves
    let result = this.getResolveLine();
    if (this.props.turn && result) {
      moveP1 = this.props.turn.moveP1;
      moveP2 = this.props.turn.moveP2;
    } else {
      return false;
    }
    return (
      <table id="GameResult">
        <tr>
          <TurnNumber turnNumber={this.props.turnNumber}/>
        </tr>
        <tr>
          <MovesList player="P1" moves={this.state.movesP1}/>
        </tr>
        <tr>
        <MovesList player="P2" moves={this.state.movesP2}/>
        </tr>
      </table>
    );
  }
}

export default GameResult;
