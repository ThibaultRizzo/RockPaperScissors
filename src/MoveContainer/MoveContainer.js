import React, { Component } from 'react';
import Move from './Move.js';
import './MoveContainer.css';
import { GameMoves, generateRandomMove } from './../Rules.js';

class MoveContainer extends Component {
  render() {
    const movesList = [];
    for (let move in GameMoves) {
      movesList.push(
        <Move key={move} type={move} onMoveClicked={this.props.onMoveClicked} />
      );
    }

    const gameType = this.props.gameType ? this.props.gameType : false;
    if (gameType === 'AI vs AI' && !this.props.isGameFinished) {
      setTimeout(this.props.onMoveClicked(generateRandomMove()), 1000);
    }
    return (
      <div id="MoveContainer">
        <h1 className="game-type">{gameType}</h1>
        <h2 className="number-turn">
          Number of turns: {this.props.maxturnCount}
        </h2>
        {movesList}
      </div>
    );
  }
}

export default MoveContainer;
