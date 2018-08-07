import React, { Component } from 'react';
import './Overlay.css';

class TurnDropDown extends Component {
  constructor(props) {
    super(props);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.onSelectTurn = this.onSelectTurn.bind(this);
    this.state = {
      currentTurn: this.props.currentTurn,
      isDropdownExpanded: false
    };
  }
  onSelectTurn = e => {
    debugger;
    this.setState({
      isDropdownExpanded: false
    });
    this.props.selectTurn(parseInt(e, 10));
  };

  toggleDropdown = e => {
    this.setState({
      isDropdownExpanded: !this.state.isDropdownExpanded,
      currentTurn: this.props.currentTurn
    });
  };
  render() {
    let turnChoices;
    if (this.state.isDropdownExpanded) {
      turnChoices = [];
      for (let i = 3; i <= this.props.maxTurn; i++) {
        turnChoices.push(
          <div
            key={i}
            className="turn-option dropdown-value"
            name={i}
            value={i}
            onClick={this.onSelectTurn}
          >
            {i}
          </div>
        );
      }
    } else {
      turnChoices = false;
    }

    return (
      <div className="turn-dropdown">
        <input
          type="button"
          className="selected-dropdown-value dropdown-value"
          value={this.props.currentTurn}
          onClick={this.toggleDropdown}
        />
        <div className="dropdown-content">{turnChoices}</div>
      </div>
    );
  }
}

class Overlay extends Component {
  MAX_TURN = 5;
  DEFAULT_TURN = 3;
  constructor(props) {
    super(props);
    this.state = {
      currentTurn: this.DEFAULT_TURN
    };
  }
  setGameType = (currentTurn, e) => {
    this.props.onOptionChosed(currentTurn, e.target.value);
  };

  selectTurn = e => {
    this.setState({
      currentTurn: e.target.textContent,
      isDropdownExpanded: false
    });
  };
  render() {
    return (
      <div id="Overlay" className="full-page-background smooth-appear">
        <input
          type="button"
          value="Player vs AI"
          className="overlay-button special-button"
          onClick={e => this.setGameType(this.state.currentTurn, e)}
        />
        <input
          type="button"
          value="AI vs AI"
          className="overlay-button special-button"
          onClick={e => this.setGameType(this.state.currentTurn, e)}
        />
        <TurnDropDown
          selectTurn={this.selectTurn}
          maxTurn={this.MAX_TURN}
          currentTurn={this.state.currentTurn}
        />
      </div>
    );
  }
}

export default Overlay;
