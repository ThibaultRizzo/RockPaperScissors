import React, { Component } from 'react';
import './GameResult.css';

function TurnRow(props) {
  let result = props.turn.result.toLocaleLowerCase();
  return (
    <div className="turn-row">
      <div className={result + ' player-1'}>{props.turn.moveP1}</div>
      <div className="turn-number">{props.turnCount + 1}</div>
      <div className={result + ' player-2'}>{props.turn.moveP2}</div>
    </div>
  );
}

class GameResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movesP1: [],
      movesP2: []
    };
  }

  render() {
    if (!this.props.turnArray) {
      return false;
    }
    let turnRows = this.props.turnArray.map((move, i) => (
      <TurnRow key={i} turnCount={i} turn={move} />
    ));
    return (
      <div id="GameResult">
        <div className="result-grid">{turnRows}</div>
      </div>
    );
  }
}

export default GameResult;
