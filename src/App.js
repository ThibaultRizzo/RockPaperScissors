import React, { Component } from 'react';
import './App.css';
import Overlay from './Overlay/Overlay.js';
import Header from './Header/Header.js';
import MoveContainer from './MoveContainer/MoveContainer.js';
import GameResult from './GameResult/GameResult.js';
import ModalPopup from './ModalPopup.js';
import PlayersHistory from './PlayersHistory/PlayersHistory.js';
import { resolveTurn, summarizeGame, GameType } from './Rules.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.onPlayerMove = this.onPlayerMove.bind(this);
    this.setGameType = this.setGameType.bind(this);
    this.displayResults = this.displayResults.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.incrementturnCount = this.incrementturnCount.bind(this);
    this.onGameEnd = this.onGameEnd.bind(this);
    this.addGameResults = this.addGameResults.bind(this);
    this.state = {
      turn: null,
      gameType: null,
      showModal: false,
      currentturnCount: false,
      maxturnCount: false,
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

  /**
   * Historizes current game results with details
   * Details are: 
   *  - result: game output from P1 perspective
   *  - scoreP1: how many wins for P1
   *  - scoreP2:  how many wins for P2
   *  - gameType: 'Player vs AI' or 'AI vs AI'
   * @param {*} game 
   */
  onGameEnd(game) {
    let summarizedGame = this.addGameResults(game);
    this.setState(prevState => ({
      games: [...prevState.games, summarizedGame]
    }));
  }

  /**
   * Enhances game object with details property.
   * ex:
   *      details: {
   *          result: -> Result enum object
   *          scoreP1: -> Number of turn won by P1
   *          scoreP2: -> Number of turn won by P2
   *      }
   * @param {*} game
   */
  addGameResults(game) {
    let gameResult = summarizeGame(game, this.state.gameType);
    return [...game, gameResult];
  }

  /**
   * Increment turn number if less than maximum turn count else returns -1.
   */
  incrementturnCount() {
    let currentturnCount = this.state.currentturnCount;
    let maxturnCount = this.state.maxturnCount;
    return currentturnCount < maxturnCount ? currentturnCount + 1 : -1;
  }

  /**
   * Updates the state given current play and assess wether or not game is finished
   * @param {*} currentTurn 
   */
  displayResults(currentTurn) {
    let gameStatus = false;
    let updatedTurnArray = this.state.turns;
    updatedTurnArray.push(currentTurn);
    let nextturnCount = this.incrementturnCount();
    if (nextturnCount === this.state.maxturnCount) {
      gameStatus = true;
      this.onGameEnd(this.state.turns);
    }
    // If turnCount gets out of boundaries, state is not updated
    if (nextturnCount !== -1) {
      this.setState({
        turn: currentTurn,
        showModal: true,
        isGameFinished: gameStatus,
        currentturnCount: nextturnCount,
        turns: updatedTurnArray
      });
    }
  }

  /**
   * Reset new game and add game type
   * @param {*} turnNumber 
   * @param {*} type 
   */
  setGameType(turnCount, type) {
    this.setState({
      gameType: type,
      currentturnCount: 0,
      maxturnCount: turnCount,
      isGameFinished: false,
      turns: []
    });
  }

  /**
   * Close modal popup
   */
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
      this.state.gameType === GameType.PlayerVsAI
    ) {
      modal = (
        <ModalPopup
          closePopup={this.closePopup}
          result={this.state.turn.result}
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
          maxturnCount={this.state.maxturnCount}
          gameType={this.state.gameType}
          onMoveClicked={this.onPlayerMove}
        />
        <div
          className={this.state.isGameFinished ? 'deactivation-panel' : ''}
        />
        <GameResult
          isGameFinished={gameStatus}
          turnArray={this.state.turns}
          turnCount={this.state.currentturnCount}
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
