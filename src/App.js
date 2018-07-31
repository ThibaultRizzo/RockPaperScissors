import React, { Component } from 'react';
import './App.css';
import MoveContainer from './MoveContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Your favorite game !
        </header>
        <MoveContainer/>
      </div>
    );
  }
}

export default App;
