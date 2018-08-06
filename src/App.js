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
    };
  }

  componentDidMount() {
    // Calls moveResolveService and renders result if result is not null
  }

  /**
   * Updates state according to the clicked option
   */
  onPlayerMove(move) {
    let turn = resolveTurn(move);
    this.displayResults(turn);
  }

  displayResults(currentTurn) {
    this.setState({ turn: currentTurn, showModal: true });
  }

  setGameType(type) {
    this.setState({ gameType: type });
  }

  closePopup() {
    this.setState({ showModal: false });
  }

  render() {
    let content;
    let overlay = false;
    let modal = false;
    if(this.state.showModal && this.state.turn) {
      modal = <ModalPopup closePopup={this.closePopup} result={this.state.turn.result} turn={this.state.turn}/>
    }
    if (!this.state.gameType) {
      overlay = <Overlay onOptionChosed={this.setGameType} />;
    }
    content = (
      <React.StrictMode>
        <Header onCreateNewGame={this.setGameType} />
        <MoveContainer gameType={this.state.gameType} onMoveClicked={this.onPlayerMove} />
        <GameResult turn={this.state.turn} />
        <PlayersHistory />
      </React.StrictMode>
    );
    return (
    <div id="App">
      {overlay}
      {content}
      {modal}
    </div>);
  }
}

export default App;
