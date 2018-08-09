import React, { Component } from 'react';
import './PlayersHistory.css';
import { workWinRate } from './../Rules.js';

class PlayersHistory extends Component {
  render() {
    let games;
    games = this.props.gameHistory.map((game, i) => {
      let details = game[game.length - 1];
      return (
        <div className={'game-row ' + details.result.toLowerCase()} key={i}>
          <div>{i + 1}</div>
          <div>{details.gameType + ": " + details.result}</div>
          <div>{details.scoreP1 + ' - ' + details.scoreP2}</div>
        </div>
      );
    });
    return (
      <div id="PlayersHistory">
        <h1>Players History</h1>
        {games}
        <div className="win-rate">
          Win Rate: {workWinRate(this.props.gameHistory)}
        </div>
      </div>
    );
  }
}

export default PlayersHistory;
