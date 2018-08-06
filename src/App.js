import React, { Component } from 'react';
import './App.css';
import MoveContainer from './MoveContainer.js';
import GameResult from './GameResult.js';
import PlayersHistory from './PlayersHistory.js';
import { resolveTurn } from './Rules.js';

class Header extends Component {
  createGame = () => {
    console.log('Create');
  };
  render() {
    const title = 'Waste an Hour Having Fun';
    return (
      <div id="Header">
        <header>{title}</header>
        <div id="header-options">
          <input
            type="button"
            value="New Game"
            className="header-button"
            onClick={e => this.createGame()}
          />
        </div>
      </div>
    );
  }
}

class Overlay extends Component {
  render() {
    return (
      <div className="Overlay">
        <h1>Overlay</h1>
        <input
          type="button"
          value="Player vs AI"
          className="header-button"
          onClick={e => this.props.onOptionChosed}
        />
        <input
          type="button"
          value="AI vs AI"
          className="header-button"
          onClick={e => this.props.onOptionChosed}
        />
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.onPlayerMove = this.onPlayerMove.bind(this);
    this.state = {
      turn: null,
      gameType: null
    };
  }

  componentDidMount() {
    // Calls moveResolveService and renders result if result is not null
    console.dir(this.state);
  }

  /**
   * Updates state according to the clicked option
   */
  onPlayerMove(move) {
    let turn = resolveTurn(move);
    this.displayResults(turn);
  }

  displayResults(currentTurn) {
    this.setState({ turn: currentTurn });
  }

  setGameType(e) {
    debugger;
    this.setState({ gameType: e.target.value });
  }

  render() {
    let content;
    if (!this.state.gameType) {
      content = <Overlay onOptionChosed={this.setGameType} />;
    } else {
      content = (
        <React.StrictMode>
          <Header />
          <MoveContainer onMoveClicked={this.onPlayerMove} />
          <GameResult turn={this.state.turn} />
          <PlayersHistory />
        </React.StrictMode>
      );
    }
    return <div id="App">{content}</div>;
  }
}

export default App;
