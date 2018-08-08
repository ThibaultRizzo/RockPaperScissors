import React, { Component } from 'react';

class Header extends Component {
  render() {
    const title = 'Waste an Hour Having Fun';
    return (
      <div id="Header">
        <header>{title}</header>
        <div id="header-options">
          <input
            type="button"
            value="New Game"
            className={
              'special-button ' + (this.props.isGameFinished ? 'jump' : '')
            }
            onClick={e => this.props.onCreateNewGame(null)}
          />
        </div>
      </div>
    );
  }
}

export default Header;
