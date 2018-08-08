import React, { Component } from 'react';
import './App.css';
import Overlay from './Overlay/Overlay.js';
import Header from './Header/Header.js';
import MoveContainer from './MoveContainer/MoveContainer.js';
import GameResult from './GameResult/GameResult.js';
import ModalPopup from './ModalPopup.js';
import PlayersHistory from './PlayersHistory/PlayersHistory.js';
import { resolveTurn } from './Rules.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.onPlayerMove = this.onPlayerMove.bind(this);
    this.setGameType = this.setGameType.bind(this);
    this.displayResults = this.displayResults.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.incrementTurnNumber = this.incrementTurnNumber.bind(this);
    this.onGameEnd = this.onGameEnd.bind(this);
    this.addGameResults = this.addGameResults.bind(this);
    this.state = {
      turn: null,
      gameType: null,
      showModal: false,
      currentTurnNumber: false,
      maxTurnNumber: false,
      isGameFinished: false,
      turns: [],
      games: []
    };
  }

  /**
   * Updates state according to the clicked option
   */
  onPlayerMove(move) {
    let turn = resolveTurn(move);
    this.displayResults(turn);
  }

  onGameEnd(game) {
    this.setState(prevState => ({
      games: [...prevState.games, this.addGameResults(game)]
    }));
  }

  addGameResults(game) {
    let gameResult = {
      result: 0,
      scoreP1: 0,
      scoreP2: 0
    };
    game.forEach(turn => {
      if ('WIN' === turn.result) {
        gameResult.scoreP1++;
      } else if ('LOSE' === turn.result) {
        gameResult.scoreP2++;
      }
    });
    if (gameResult.scoreP1 > gameResult.scoreP2) {
      gameResult.result = 'WIN';
    } else if (gameResult.scoreP1 < gameResult.scoreP2) {
      gameResult.result = 'DRAW';
    } else {
      gameResult.result = 'LOSE';
    }
    return [...game, gameResult];
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
    let updatedTurnArray = this.state.turns;
    updatedTurnArray.push(currentTurn);
    let nextTurnNumber = this.incrementTurnNumber();
    if (nextTurnNumber === this.state.maxTurnNumber) {
      gameStatus = true;
      this.onGameEnd(this.state.turns, gameStatus);
    }
    console.log('Turn number', nextTurnNumber);
    console.log('Game Status', gameStatus);
    console.dir(currentTurn);
    this.setState({
      turn: currentTurn,
      showModal: true,
      isGameFinished: gameStatus,
      currentTurnNumber: nextTurnNumber,
      turns: updatedTurnArray
    });
  }

  setGameType(turnNumber, type) {
    this.setState({
      gameType: type,
      currentTurnNumber: 0,
      maxTurnNumber: turnNumber,
      isGameFinished: false,
      turns: []
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
    if (
      this.state.showModal &&
      this.state.turn &&
      this.state.gameType === 'Player vs AI'
    ) {
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
        <GameResult
          isGameFinished={gameStatus}
          turnArray={this.state.turns}
          turnNumber={this.state.currentTurnNumber}
        />
        <PlayersHistory gameHistory={this.state.games} />
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
