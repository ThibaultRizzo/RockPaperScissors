import React, { Component } from 'react';
import Move from './Move.js';
import './MoveContainer.css';
import { GameMoves } from './Rules.js';

class MoveContainer extends Component {
  onMoveClicked = move => {
    this.props.onMoveClicked(move);
  };
  render() {
    const movesList = GameMoves.map(move => {
      return (
        <Move key={move} type={move} onMoveClicked={this.props.onMoveClicked} />
      );
    });
    return <div id="MoveContainer">{movesList}</div>;
  }
}

export default MoveContainer;
