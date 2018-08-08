import React, { Component } from 'react';
import Move from './Move.js';
import './MoveContainer.css';
import { GameMoves, generateRandomMove } from './../Rules.js';

class MoveContainer extends Component {
  render() {
    const movesList = GameMoves.map(move => {
      return (
        <Move key={move} type={move} onMoveClicked={this.props.onMoveClicked} />
      );
    });
    const gameType = this.props.gameType ? this.props.gameType : false;
    if (gameType === 'AI vs AI' && !this.props.isGameFinished) {
      setInterval(this.props.onMoveClicked(generateRandomMove()), 1000);
    }
    return (
      <div id="MoveContainer">
        <h1 className="game-type">{gameType}</h1>
        <h2 className="number-turn">
          Number of turns: {this.props.maxTurnNumber}
        </h2>
        {movesList}
      </div>
    );
  }
}

export default MoveContainer;
