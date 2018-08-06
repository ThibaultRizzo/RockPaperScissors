import React, { Component } from 'react';
import Move from './Move.js';
import './MoveContainer.css';
import { GameMoves } from './Rules.js';

class MoveContainer extends Component {
  render() {
    const movesList = GameMoves.map(move => {
      return (
        <Move key={move} type={move} onMoveClicked={this.props.onMoveClicked} />
      );
    });
    const gameType = this.props.gameType ? this.props.gameType : false;
    return (
    <div id="MoveContainer">
      <h1 className="game-type">{gameType}</h1>
      {movesList}
    </div>
    );
  }
}

export default MoveContainer;
