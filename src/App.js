import React, { Component } from 'react';
import './App.css';
import Overlay from './Overlay.js';
import Header from './Header.js';
import MoveContainer from './MoveContainer.js';
import GameResult from './GameResult.js';
import ModalPopup from './ModalPopup.js';
import PlayersHistory from './PlayersHistory.js';
import { resolveTurn } from './Rules.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.onPlayerMove = this.onPlayerMove.bind(this);
    this.setGameType = this.setGameType.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.state = {
      turn: null,
      gameType: null,
      showModal: false,
      currentTurnNumber: false,
      maxTurnNumber: false,
      isGameFinished: false
    };
  }

  /**
   * Updates state according to the clicked option
   */
  onPlayerMove(move) {
    let turn = resolveTurn(move);
    this.displayResults(turn);
  }

  incrementTurnNumber() {
    let currentTurnNumber = this.state.currentTurnNumber;
    let maxTurnNumber = this.state.maxTurnNumber;
    return currentTurnNumber < maxTurnNumber
      ? currentTurnNumber + 1
      : currentTurnNumber;
  }

  displayResults(currentTurn) {
    let gameStatus = false;
    let nextTurnNumber = this.incrementTurnNumber();
    debugger;
    if (nextTurnNumber === this.state.maxTurnNumber) {
      gameStatus = true;
    }
    console.log('Turn number', nextTurnNumber);
    console.log('Game Status', gameStatus);
    console.dir(currentTurn);
    this.setState({
      turn: currentTurn,
      showModal: true,
      isGameFinished: gameStatus,
      currentTurnNumber: nextTurnNumber
    });
  }

  setGameType(turnNumber, type) {
    this.setState({
      gameType: type,
      currentTurnNumber: 0,
      maxTurnNumber: turnNumber,
      isGameFinished: false
    });
  }

  closePopup() {
    this.setState({ showModal: false });
  }

  render() {
    let content;
    let overlay = false;
    let modal = false;
    let gameStatus = this.state.isGameFinished;
    if (this.state.showModal && this.state.turn) {
      modal = (
        <ModalPopup
          closePopup={this.closePopup}
          result={this.state.turn.result}
          turn={this.state.turn}
        />
      );
    }
    if (!this.state.gameType) {
      overlay = <Overlay onOptionChosed={this.setGameType} />;
    }
    content = (
      <React.StrictMode>
        <Header
          isGameFinished={gameStatus}
          onCreateNewGame={this.setGameType}
        />
        <MoveContainer
          isGameFinished={gameStatus}
          maxTurnNumber={this.state.maxTurnNumber}
          gameType={this.state.gameType}
          onMoveClicked={this.onPlayerMove}
        />
        <div
          className={this.state.isGameFinished ? 'deactivation-panel' : ''}
        />
        <GameResult isGameFinished={gameStatus} turn={this.state.turn} />
        <PlayersHistory />
      </React.StrictMode>
    );
    return (
      <div id="App">
        {overlay}
        {content}
        {modal}
      </div>
    );
  }
}

export default App;
